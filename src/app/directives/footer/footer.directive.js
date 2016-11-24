import template from './footer.tpl.html';

footer.$inject = [];

export default function footer() {
    var directive = {
        restrict: 'E',
        template: template,
        link: link,
        controller: footerController,
        controllerAs: 'vm',
        scope: true
    };


    footerController.$inject = ['$scope', '$translate', '$localStorage'];

    function footerController ($scope, $translate, $localStorage) {
        var vm = this;
        vm.lang = 'EN';
        //
        vm.title = $scope.title;


        $scope.changeLanguage = function (lang, sufix) {
            $translate.use(lang);
            vm.lang = sufix;
        };
    }

    return directive;

    function link() {}
}