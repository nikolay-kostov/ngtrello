/* @ngInject */
ProfileService.$inject = ['$localStorageProvider'];

export default ProfileService;

function ProfileService ($localStorage, $timeout, $state) {

    var userProfileData = {};

    // Methods available in config phase
    // use with this
    this.loadProfile = function () {

        userProfileData.loggedIn = $localStorage.get('loggedIn') || false;
        userProfileData.id = $localStorage.get('userId');

    };

    /***
     * Methods available in RUN
     * @type {{isLoggedIn: isLoggedIn}}
     */
    this.$get = function () {

        return {
            isLoggedIn: isLoggedIn,
            setProfile: setProfile,
            getProfile: getProfile,
            unsetProfile: unsetProfile
        };
    };

    function isLoggedIn () {
        return userProfileData.loggedIn;
    }

    /***
     *
     * @param {Object} userdata
     */
    function setProfile (userData) {

        userProfileData = userData;
        userProfileData.loggedIn = true;

        $localStorage.set('loggedIn', userProfileData.loggedIn);
        $localStorage.set('userId', userProfileData.id);
    }

    /***
     * Unsets user profile
     */
    function unsetProfile () {

        userProfileData = {
            loggedIn: false
        };

        $localStorage.set('loggedIn', false);
        $localStorage.set('userId', null);
    }

    /***
     * Get profile
     */
    function getProfile() {
        return userProfileData;
    }
}