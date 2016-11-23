import 'angular';
import _ from 'underscore';

export default  angular.module('app.filters.filterByCredentials', [])
    .filter('filterByCredentials', [function() {
        return function(collection, search) {

            var result = _.findWhere(collection, {
                username: search.username,
                password: search.password
            });

            return result;
        };
    }]).name;