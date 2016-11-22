import template from './header.guest.tpl.html';

headerGuest.$inject = [];

export default function headerGuest() {
    var directive = {
        restrict: 'E',
        template: template,
        link: link,
        controller: headerController,
        controllerAs: 'vm',
        scope: true
    };

    headerController.$inject = ['$scope'];

    function headerController ($scope) {
        var vm = this;
        //
        vm.title = $scope.title;
    }

    return directive;

    function link() {}
}