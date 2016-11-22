/***
 * Configure Home module
 **/
import template from './home.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.guest.home", {
        url: "/",
        views: {
            guest: {
                template: template,
                controllerAs: 'vm',
                controller: 'HomeController'
            }
        },
        params: {
            requeireLogin: false
        }
    });
}