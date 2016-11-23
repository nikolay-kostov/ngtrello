import 'angular';
import headerUser from './header/header.user.directive';
import confirmModal from './modals/confirm.modal.directive';
import boardModal from './modals/createBoard.modal.directive';

var commonDepends = [];

export default angular
                    .module('user.directives', commonDepends)
                    .directive('headerUser', headerUser)
                    .directive('confirmModal', confirmModal)
                    .directive('boardModal', boardModal)
                    .name;