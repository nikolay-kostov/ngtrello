/***
 * Configure Home module
 **/

import template from './logout.tpl.html';
import LogoutController from  './logout.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.user.logout", {
        url: "/logout",
        views: {
            user: {
                template: template,
                controllerAs: 'vm',
                controller: LogoutController
            }
        },
        params: {
            requeireLogin: true
        }
    });
}