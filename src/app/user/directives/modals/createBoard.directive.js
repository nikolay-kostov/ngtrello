import template from './createBoard.modal.tpl.html';
import BoardModalController from './createBoard.modal.controller';

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