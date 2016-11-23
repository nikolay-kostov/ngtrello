import 'angular';
import config from './board.config';
import cardModule from './card-view/card.module';

let boardDependencies = [
    cardModule
];

export default angular.module('user.board', boardDependencies)
    .config(config).name;