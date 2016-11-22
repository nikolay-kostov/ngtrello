import 'angular';
import config from './register.config';
import RegisterController from './register.controller';

export default angular.module('guest.register', [])
    .controller('RegisterController', RegisterController)
    .config(config)
    .name;