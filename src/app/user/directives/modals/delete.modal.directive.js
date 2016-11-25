import template from './confirm.modal.tpl.html';
import ConfirmModalController from './confirm.modal.controller';

/* @ngInject */
DeleteModal.$inject = [];

export default function DeleteModal() {
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
        console.log(scope);
    };

    return directive;
}