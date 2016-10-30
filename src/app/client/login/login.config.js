/***
 * Configure Home module
 **/
import template from './login.tpl.html';
import LoginController from './login.controller.js';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("ngTrello.client.login", {
        url: "/login",
        views: {
            client: {
                template: template,
                controller: LoginController,
                controllerAs: 'vm'
            }
        },
        params: {
            requeireLogin: false
        }
    });
}