/***
 * Configure Home module
 **/

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("ngTrello.admin", {
        abstract: true,
        template: '<header-admin></header-admin><div ui-view="admin" class="page-wrapper admin"></div>'
    });
}