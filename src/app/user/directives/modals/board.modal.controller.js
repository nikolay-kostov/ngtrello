export default BoardModalController;

/* @ngInject */
BoardModalController.$inject = ['$scope'];

function BoardModalController($scope) {

    $scope.completeAction = function () {
        $scope.showBoard = false;
        $scope.action({
            item: $scope.item
        });
    };
}