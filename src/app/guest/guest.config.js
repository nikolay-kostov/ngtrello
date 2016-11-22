/***
 * Configure Guest Home module
 **/

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.guest", {
        abstract: true,
        controller: guestController,
        // controllerAs: 'client',
        template: '<header-guest></header-guest><div ui-view="guest" class="page-wrapper client"></div>'
    });

    clientController.$inject = ['$scope'];

    function clientController ($scope) {
        $scope.inheritToChilds = 'true';
        this.appGuest = 'abstract app.guest';
    }
}