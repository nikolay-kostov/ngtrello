import template from './header.user.tpl.html';

headerUser.$inject = [];

export default function headerUser() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: headerUserController,
        controllerAs: 'vm',
        scope: true,

        link (scope, element, attr) {
        }
    };

    headerUserController.$inject = ['$state', 'ProfileService'];

    function headerUserController ($state, ProfileService) {
        var vm = this;

        vm.logOut = function() {
            ProfileService.unsetProfile();
            $state.go('app.guest.home');
        };
    }

    return directive;
}