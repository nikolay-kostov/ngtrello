/***
 * Configure Home module
 **/
import template from './register.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.guest.register", {
        url: "/register",
        views: {
            guest: {
                template: template,
                controller: 'RegisterController',
                controllerAs: 'vm'
            }
        },
        params: {
            requeireLogin: false
        }
    });
}