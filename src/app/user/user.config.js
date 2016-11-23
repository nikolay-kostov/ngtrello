/***
 * Configure User Home module
 **/
import UserController from './user.controller';
export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.user", {
        abstract: true,
        template: '<header-user></header-user><div ui-view="user" class="page-wrapper admin"></div>',
        controller: UserController,
        controllerAs: 'vm'
    });
}