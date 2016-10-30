import 'angular';
import userNameFilter from './username.filter';
import credentialsFilter from './credentials.filter';

export default angular.module('ngTrello.filters', [userNameFilter, credentialsFilter]).name;