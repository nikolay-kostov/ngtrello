import template from './board.modal.tpl.html';
import BoardModalController from './board.modal.controller';

/* @ngInject */
BoardModal.$inject = [];

export default function BoardModal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: BoardModalController,

        link (scope, element, attrs) {

        },

        scope: {
            show: '=',
            title: '@',
            action: '&',
            item: '='
        }

    };

    return directive;
}