/***
 * Configure User Home module
 **/
import UserController from './user.controller';
export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.user", {
        abstract: true,
        template: '<header-admin></header-admin><div ui-view="admin" class="page-wrapper admin"></div>',
        controller: AdminController,
        controllerAs: 'vm'
    });
}