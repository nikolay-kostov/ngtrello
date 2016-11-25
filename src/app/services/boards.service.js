export default BoardsService;

BoardsService.$inject = ['$resource','API_URL'];

/* @ngInject */
function BoardsService($resource, API_URL) {

    var URL = API_URL + 'users/:userId/:action/:boardId/:cardAction/:cardId';
    var defaultParams = {
        userId: '@userId',
        action: '@action',
        boardId: '@boardId',
        cardAction: '@cardAction',
        cardId: '@cardId'
    };

    return $resource(URL, defaultParams, {

        //Get all boards
        getBoards: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        //Get specific  board
        getBoard: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        //Create new board
        createBoard: {
            method: 'POST',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        /***
         * Delete board
         *  @param {Number} userId
         */
        deleteBoard: {
            method: 'DELETE',
            params: {
                action: 'boards'
            },
            isArray: false
        },

        /***
         * creating new cards for board
         * @param {Number} userId
         * @param {Number} boardId
         */
        createCard: {
            method: 'POST',
            params: {
                action: 'boards',
                cardAction: 'cards'
            },
            isArray: false
        },
        /***
         * Delete card
         *  @param {Number} userId
         *  @param {Number} boardId
         *  @param {Number} cardId
         */
        deleteCard: {
            method: 'DELETE',
            params: {
                action: 'boards',
                cardAction: 'cards'
            },
            isArray: false
        },

    });
}




