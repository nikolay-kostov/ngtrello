export default BoardController;

/* @ngInject */
BoardController.$inject = ['$scope','$state', 'BoardsService','ProfileService'];

function BoardController($scope, $state, BoardsService, ProfileService) {

    var vm   = this;

    vm.title = 'Board Controller';
    vm.board = null;

    let userId = ProfileService.getProfile().id;

    activate();

    ////////////////

    function activate() {

        if($state.params.board){

            vm.board = $state.params.board;
            console.log(vm.board)
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

    vm.openModal = function(modal){

    };

    vm.createCard = function () {

        var title = prompt("Enter card name: ");

        var newCard = {
            name: title,
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

    function logOut() {
        ProfileService.unsetProfile();
        $state.go(app.guest.home);
    }
}


