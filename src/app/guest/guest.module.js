import 'angular';
import config from './guest.config';
import homeModule from './home/home.module';
import loginModule from './login/login.module';
import registerModule from './register/register.module';
import guestDirectives from './directives/guest.directives';

let guestDependencies = [
    guestDirectives,
    homeModule,
    loginModule,
    registerModule
];

export default angular.module('app.guest', guestDependencies)
    .config(config).name;