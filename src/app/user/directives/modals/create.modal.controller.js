export default CreateModalController;

/* @ngInject */
CreateModalController.$inject = ['$scope'];

function CreateModalController($scope) {

    $scope.completeAction = function () {
        $scope.showModal = false;
        $scope.action({
            item: $scope.item
        });
    };
}