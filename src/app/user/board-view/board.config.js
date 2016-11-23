/***
 * Configure User Home module
 **/
import template from './board.tpl.html';
import BoardController from './board.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.user.board", {
        url: "/board/:id",
        views: {
            user: {
                template: template,
                controller: BoardController,
                controllerAs: 'vm'
            }
        },
        params: {
            board: null,
            requeireLogin: true
        }
    });
}