import template from './header.user.tpl.html';

headerUser.$inject = [];

export default function headerUser() {
    var directive = {
        restrict: 'E',
        template: template,

        link (scope, element, attr) {
        }
    };

    return directive;
}