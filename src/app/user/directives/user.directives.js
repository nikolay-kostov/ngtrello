import 'angular';
import headerUser from './header/header.user.directive';
import confirmModal from './modals/confirm.modal.directive';
import createModal from './modals/create.modal.directive';
import deleteModal from './modals/delete.modal.directive';

var commonDepends = [];

export default angular
                    .module('user.directives', commonDepends)
                    .directive('headerUser', headerUser)
                    .directive('confirmModal', confirmModal)
                    .directive('createModal', createModal)
                    .directive('deleteModal', createModal)
                    .name;