export default SessionService;

/* @ngInject */
SessionService.$inject = ['$timeout', 'ProfileService', 'SESSION_TIME', '$injector'];

function SessionService($timeout, ProfileService, SESSION_TIME, $injector) {

    var sessionTimer = null,
        sessionFlag = false; //true - if user is active els false

    this.setSession = setSession;
    this.startSessionCheck = startSessionCheck;

    ////////////////

    /***
     * Sets session activitry
     * @param {Boolean} isActive
     */
    function setSession(isActive) {

        sessionFlag = isActive;

        if(isActive) {
            $timeout.cancel(sessionTimer);
            startSessionCheck();
        }
    }

    function startSessionCheck () {

        sessionTimer = $timeout(function checkActivity (){

            if(sessionFlag && ProfileService.isLoggedIn()){
                setSession(false);
                startSessionCheck();
            }else {
                endSession();
            }

        }, SESSION_TIME);
    }

    function endSession () {
        var stateService = $injector.get('$state');
        ProfileService.unsetProfile();
        stateService.go('app.guest.login');
    }
}

