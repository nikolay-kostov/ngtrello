import {namespace,translations} from './login.translations';

export default LoginController;

LoginController.$inject = ['$state', 'UserService', 'filterByCredentialsFilter', 'ProfileService','Translations'];

function LoginController ($state, UserService, filterByCredentials, ProfileService, Translations) {

    var vm = this;

    vm.title = 'Login Controller';
    let users = [];
    vm.userData = {
        username: '',
        password: ''
    };

    vm.translations = {};

    activate();

    /************/

    function activate() {

        UserService.getAllUsers({},

            function success (response){
                users = response.result;
            }, function error (response) {

                console.error(response);
            });


        Translations.executeTranslations(namespace,translations).then(function (translations) {
            vm.translations = translations;
            //console.log(vm.translations);
        });
    }

    vm.initiateLogin = function () {

       if( vm.loginForm.$valid) {
           var userData = filterByCredentials(users, vm.userData);
           if (userData) {
                ProfileService.setProfile(userData);
               $state.go('app.user.home');
           } else {
               // TODO: show error
           }

       }else {
           console.log('NO');
           // TODO: focus on first invalid input
       }
    };
}

