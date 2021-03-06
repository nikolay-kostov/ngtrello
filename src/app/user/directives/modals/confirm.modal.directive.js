import template from './confirm.modal.tpl.html';
import ConfirmModalController from './confirm.modal.controller';

/* @ngInject */
ConfirmModal.$inject = [];

export default function ConfirmModal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: ConfirmModalController,
        link: linkFunction,
        scope: {
            show: '=',
            title: '@',
            action: '&',
            item: '='
        }

    };

    var linkFunction = function(scope, element, attrs) {
    };

    return directive;
}