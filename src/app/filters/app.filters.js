import 'angular';
import filterByUserName from './username.filter';
import byCredentialsFilter from './credentials.filter';

export default angular.module('app.filters', [filterByUserName, byCredentialsFilter]).name;