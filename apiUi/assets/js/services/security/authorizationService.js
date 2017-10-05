(function() {
    'use strict';

    angular
        .module('apiUi')
        .service('authorizationService', AuthorizationService);

    AuthorizationService.$inject = ['$base64'];

    function AuthorizationService($base64) {

        var vm = this;

        var username = 'Marcos';
        var password = 'Pinho';

        function getToken(){
            return $base64.encode(username + ':' + password);
        }

        vm.getHeaderAuthorization = function(){
            return {
                headers: {  'Authorization': 'Basic ' + getToken() }
            }
        };

    }
})();