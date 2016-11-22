import 'angular';

import headerGuest from './header/header.guest.directive';

var guestDepends = [];

export default angular
                    .module('guest.directives', guestDepends)
                    .directive('headerGuest', headerGuest)
                    .name;