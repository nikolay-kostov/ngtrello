
export default UserController;

/* @ngInject */
UserController.$inject = ['SessionService'];

function UserController(SessionService) {
    var vm   = this;
    vm.title = 'UserController';
    vm.back = '';
    activate();

    ////////////////

    function activate() {

        SessionService.startSessionCheck();
    }
}