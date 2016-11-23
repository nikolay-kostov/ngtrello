import 'angular';
import _ from 'underscore';

export default  angular.module('app.filters.filterByUserName', [])
    .filter('filterByUserName', ['$parse', function( $parse ) {
        return function(collection, search) {
            var result = _.findWhere(collection, {
                username: search
            });
            return result ? true : false;
        };
}]).name;