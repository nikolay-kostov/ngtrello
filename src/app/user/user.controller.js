
export default UserController;

/* @ngInject */
UserController.$inject = ['SessionService'];

function AdminController(SessionService) {
    var vm   = this;
    vm.title = 'UserController';

    activate();

    ////////////////

    function activate() {

        SessionService.startSessionCheck();
    }
}