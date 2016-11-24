import template from './create.modal.tpl.html';
import CreateModalController from './create.modal.controller';

/* @ngInject */
CreateModal.$inject = [];

export default function CreateModal() {
    var directive = {
            restrict: 'E',
            template: template,
            controller: CreateModalController,
            link: link,
            scope: {
                showModal: '=',
                title: '@',
                action: '&',
                item: '='
            }

    };

    var link = function(scope, element, attrs) {

    };

    return directive;
}