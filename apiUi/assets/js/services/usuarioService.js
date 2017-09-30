(function() {
    'use strict';

    angular
        .module('apiUi')
        .service('usuarioService', UsuarioService);

    UsuarioService.$inject = ['$http'];

    function UsuarioService($http) {

        var vm = this;
        var recurso = 'http://localhost:8081/api/usuarios';

        vm.findAll = function(){
            return $http.get(recurso);
        };

        vm.save = function(usuario){
            return $http.post(recurso, usuario);
        };

    }
})();