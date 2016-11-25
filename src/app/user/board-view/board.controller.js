import _ from 'underscore';
export default BoardController;

/* @ngInject */
BoardController.$inject = ['$scope','$state', 'BoardsService','ProfileService'];

function BoardController($scope, $state, BoardsService, ProfileService) {

    var vm   = this;
    vm.title = 'Board Controller';
    vm.board = null;
    vm.ui = {
        cardsLoading: true,
        confirmModal: {
            show : false,
            title: ''
        },
        createModal: {
            showModal : false,
            header: '',
            title: '',
            description: ''
        }
    };

    let userId = ProfileService.getProfile().id;

    activate();

    ////////////////

    function activate() {

        if($state.params.board){
            vm.board = $state.params.board;
            console.log(vm.board);
        } else {

            if($state.params.id) {

                BoardsService.getBoard({
                    userId : userId ,
                    boardId: $state.params.id
                },successGetBoard,failGetBoard);

            } else {
                $state.go('app.user.home');
            }
        }
    }

    function successGetBoard(response){

        vm.board = response.result;
    }

    function failGetBoard(response){

        // TODO : show error
    }

    vm.openModal = function(){
        vm.ui.createModal.showModal = true;
        vm.ui.createModal.header = 'Create new Card';
        vm.ui.createModal.newCard = {
            name : '',
            text_content : '',
        };
    };

    vm.createCard = function (card) {

        var newCard = {
            name: card.name,
            text_content: card.description,
            userId: userId,
            boardId: vm.board.id
        };
        BoardsService.createCard(newCard,
            successCreateCard, failCreateCard
        );
    };

    function successCreateCard(response){

        vm.board.cards.push(response.result);
    }

    function failCreateCard(response){

        // TODO : show error
    }

    vm.deleteCard = function (card) {
        vm.ui.confirmModal.show = true;
        vm.ui.confirmModal.title = card.name;
        vm.ui.confirmModal.itemToDelete = card;
    };

    vm.confirmDelete = function (item){
        if(!item.deleting) {
            item.deleting = true;
            BoardsService.deleteCard({
                userId: userId,
                boardId: item.boardId,
                cardId:item.id
            }, successDeleteCard.bind(item), failDeleteCard.bind(item));
        }
    };

    function successDeleteCard(response) {
       vm.board.cards = _.reject(vm.board.cards, this);
        this.deleting = false;
    }

    function failDeleteCard(response) {
        //TODO: Show error
        this.deleting = false;
    }

    function logOut() {
        ProfileService.unsetProfile();
        $state.go(app.guest.home);
    }
}


