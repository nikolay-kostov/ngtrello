import 'angular';
import ProfileService from './profile.provider.js';

export default angular.module('ngTrello.providers', [])
    .provider('ProfileService', ProfileService).name;