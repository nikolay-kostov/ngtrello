import template from './header.user.tpl.html';

headerUser.$inject = ['$rootScope' ,'$state'];

export default function headerUser($rootScope, $state) {
    var directive = {
        restrict: 'E',
        template: template,
        controller: headerUserController,
        controllerAs: 'vm',
        scope: true,

        link (scope, element, attr) {
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {
                scope.vm.state = toState.name;
                scope.vm.backToState = fromState.url;
          });
        }
    };

    headerUserController.$inject = ['$state', 'ProfileService'];

    function headerUserController ($state, ProfileService) {
        var vm = this;
        vm.state = $state.current.name;
        vm.backToState = '';
        vm.logOut = function() {
            ProfileService.unsetProfile();
            $state.go('app.guest.home');
        };
    }

    return directive;
}