export default LoginController;

LoginController.$inject = ['$state', 'UserService', 'ProfileService', credentialsFilter];

function LoginController ($state, UserService, ProfileService, credentials) {

    var vm = this;

    vm.title = 'Login Controller';
    let users = [];
    vm.userData = {
        username: '',
        password: ''
    };

    activate();

    ////////////////

    function activate() {
        UserService.getAllUsers({},
            function success (response){
                users = response.result;
                console.log(response);
            }, function error (response) {

                console.error(response);
            });
    }

    vm.initiateLogin = function () {

       if( vm.loginForm.$valid) {
           var userData = credentials(users, vm.userData);

           if (userData) {
                ProfileService.setProfile(userData);
               $state.go('ngTrello.admin.home');
           } else {
               // TODO: show error
           }
           
       }else {
           console.log('NO');
       }
    }
}

