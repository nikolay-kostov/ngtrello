// Libraries
import 'angular';
import 'ui-router';
import 'angularMaterialize';
import 'ng-resource';
import 'ng-storage';
import 'angular-cookies';
import 'ng-translate';
import 'ng-translate-loader';
import 'ng-translate-local';
import 'ng-translate-cookie';


// ngTrello app config
import config from './app.config';

// ngTrello modules
import guestModule from './guest/guest.module';
import userModule from './user/user.module';

import commonDirectives from './directives/common.directives.js';
import appServices from './services/app.services';
import appProviders from './providers/app.providers';
import appFilters from './filters/app.filters';

import appConstants from './constants/app.constants';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    'ui.materialize',
    //'ngMaterial',
    'ngResource',
    'ngStorage',
    'ngCookies',
    'pascalprecht.translate',
    commonDirectives,
    appServices,
    appProviders,
    appConstants,
    appFilters,

    guestModule,
    userModule
];

/**
 * Main ngTrello app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config)
    .run(appRun);

appRun.$inject = ['$rootScope', '$state', 'ProfileService', '$translate'];

function appRun ($rootScope, $state, ProfileService, $translate) {

    $rootScope.$on('$stateChangeStart', handleStateChange);

    function handleStateChange (evnt, toState, toParams, fromState, fromParams, options) {

        if(ProfileService.isLoggedIn() === toState.params.requeireLogin) {

        }else {
            evnt.preventDefault();

            if(ProfileService.isLoggedIn()) {
                $state.go('app.user.home');
            }else {
                $state.go('app.guest.home');
            }
        }
    }
}
