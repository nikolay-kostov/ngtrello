/***
 * Configure User Cards module
 **/
import template from './card.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.user.card", {
        url: "/board/card",
        views: {
            user: {template: template}
        }
    });
}