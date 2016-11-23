export default ConfirmModalController;

/* @ngInject */
ConfirmModalController.$inject = ['$scope'];

function ConfirmModalController($scope) {

    $scope.completeAction = function () {
        $scope.show = false;
        $scope.action({
            item: $scope.item
        });
    };
}