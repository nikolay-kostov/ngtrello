/***
 * Libraries
 */
import 'angular';
import 'ui-router';
import 'angularMaterialize';
//import 'ngMaterial';
import 'ng-resource';
import 'ng-storage';

/***
 * ngTrello config
 */
import config from './ngTrello.config';

/***
 * ngTrello modules
 */

import clientModule from './client/client.module';
import adminModule from './admin/admin.module';

import commonDirectives from './directives/common.directives.js';
import ngTrelloServices from './services/ngTrello.services';
import ngTrelloProviders from './providers/ngTrello.providers';
import ngTrelloFilters from './filters/ngTrello.filters';

import ngTrelloConstants from './constants/ngTrello.constants';

/**
 * Define application dependencies
 * @type {Array}
 */
let ngTrelloDependencies = [
    'ui.router',
    'ui.materialize',
    //'ngMaterial',
    'ngResource',
    'ngStorage',
    commonDirectives,
    ngTrelloServices,
    ngTrelloProviders,
    ngTrelloConstants,
    ngTrelloFilters,
    
    clientModule,
    adminModule
];

/**
 * Main app module
 * @type {angular.Module}
 */
let ngTrello = angular.module('ngTrello', ngTrelloDependencies);

ngTrello.config(config)
    .run(appRun);

appRun.$inject = ['$rootScope', '$state', 'ProfileService'];

function appRun ($rootScope, $state, ProfileService) {

    $rootScope.$on('$stateChangeStart', handleStateChange);

    function handleStateChange (evnt, toState, toParams, fromState, fromParams, options) {

        if(ProfileService.isLoggedIn() === toState.params.requeireLogin) {

        }else {
            evnt.preventDefault();

            if(ProfileService.isLoggedIn()) {
                $state.go('ngTrello.admin.home');
            }else {
                $state.go('ngTrello.client.home');
            }
        }
    }
}
