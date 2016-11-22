import 'angular';
import config from './login.config';

export default angular.module('guest.login', [])
    .config(config).name;