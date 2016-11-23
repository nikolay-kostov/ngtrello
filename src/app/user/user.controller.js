
export default UserController;

/* @ngInject */
UserController.$inject = ['SessionService'];

function UserController(SessionService) {
    var vm   = this;
    vm.title = 'UserController';

    activate();

    ////////////////

    function activate() {

        SessionService.startSessionCheck();
    }
}