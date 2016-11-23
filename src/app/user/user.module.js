import 'angular';
import config from './user.config';
import userHomeModule from './home/home.module';
import userLogoutModule from './logout/logout.module';
import userBoardModule from './board-view/board.module';
import userDirectives from './directives/user.directives';

let userDependencies = [
    userDirectives,
    userHomeModule,
    userBoardModule,
    userLogoutModule
];

export default angular.module('app.user', userDependencies)
    .config(config).name;