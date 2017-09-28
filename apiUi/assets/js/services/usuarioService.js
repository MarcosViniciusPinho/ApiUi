(function() {
    'use strict';

    angular
        .module('apiUi')
        .service('usuarioService', UsuarioService);

    UsuarioService.$inject = ['$http'];

    function UsuarioService($http) {

        var vm = this;

        vm.findAll = function(){
            return $http.get('http://localhost:8081/api/usuarios');
        };

    }
})();