import 'angular';
import byUserName from './username.filter';
import byCredentials from './credentials.filter';

export default angular.module('app.filters', [byUserName, byCredentials]).name;