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


    footerController.$inject = ['$scope', '$translate', '$localStorage', '$window'];

    function footerController ($scope, $translate, $localStorage, $window) {
        var vm = this;
        vm.lang = 'EN';
        vm.lang = ($window.localStorage.getItem("NG_TRANSLATE_LANG_KEY")).substr(3);
        //
        vm.title = $scope.title;


        $scope.changeLanguage = function (lang, sufix) {
            $translate.use(lang);
            vm.lang = sufix;
        };
    }

    return directive;

    function link() {

    }
}