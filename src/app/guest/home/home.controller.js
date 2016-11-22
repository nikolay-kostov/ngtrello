export default HomeController;

HomeController.$inject = ['$scope'];

function HomeController ($scope) {

    var vm = this;
    vm.title = 'Home Controller';
    $scope.$parent.title = vm.title;

    activate();


    function activate() {
    }

    vm.getBoards = function () {
    };
}

