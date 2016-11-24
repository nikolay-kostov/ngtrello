import _ from 'underscore';

export default HomeController;

HomeController.$inject = ['BoardsService', 'ProfileService'];

/* @ngInject */
function HomeController(BoardsService, ProfileService) {
    var vm   = this;
    vm.title = 'Home Controller';
    vm.boards = [];
    vm.ui = {
        boardsLoading: true,
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

    let userId;

    init();

    ////////////////

    function init() {
        userId = ProfileService.getProfile().id;
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
    }

    vm.deleteBoard = function (board) {
        vm.ui.confirmModal.show = true;
        vm.ui.confirmModal.title = board.name;
        vm.ui.confirmModal.itemToDelete = board;
    };

    vm.confirmDelete = function (item){
        if(!item.deleting) {
            item.deleting = true;

            BoardsService.deleteBoard({
                userId: userId,
                boardId: item.id
            }, successDeleteBoard.bind(item), failDeleteBoard.bind(item));
        }
    };

    /***
     * Success callback on deleting a board
     * @context {Object} board that has been deleted
     * @param response
     */
    function successDeleteBoard(response) {

        vm.boards = _.reject(vm.boards, this);
        this.deleting = false;
    }

    function failDeleteBoard(response) {
        //TODO: Show error
        this.deleting = false;
    }

    function successGetBoards(response) {
        vm.boards = response.result;
        vm.ui.boardsLoading = false;
    }

    function failGetBoards(response) {
        //TODO: Show error
        vm.ui.boardsLoading = false;
    }

    /***
     * Open modal window to create new board
     */
    vm.showCreate = function () {
        vm.ui.createModal.showModal = true;
        vm.ui.createModal.header = 'Create new Board';
        vm.ui.createModal.newBoard = {
            name : '',
            description : '',
        };
        console.log(vm.ui.createModal.showModal);
    };


    /***
     * TO DO: complete
     * - show modal to enter Board name
     * - modal must have 2 button - save, cancel
     */
    vm.createBoard = function (board) {
        var newBoard = {
            name: board.name,
            userId: userId
        };


        BoardsService.createBoard(newBoard,
            function success(response) {
                console.log(response.result);
                BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
            }, function error(response) {
                //TODO: error
            }
        );
    };


}

