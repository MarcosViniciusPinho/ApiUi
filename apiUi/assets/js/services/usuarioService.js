(function() {
    'use strict';

    angular
        .module('apiUi')
        .service('usuarioService', UsuarioService);

    UsuarioService.$inject = ['$http', 'authorizationService'];

    function UsuarioService($http, authorizationService) {

        var vm = this;
        var recurso = 'http://localhost:8081/api/usuarios';

        vm.findAll = function(){
            return $http.get(recurso, authorizationService.getHeaderAuthorization());
        };

        vm.saveOrUpdate = function(usuario){
          return usuario.id != null ? update(usuario) : save(usuario);
        };

        vm.getUsuario = function(id){
            return $http.get(recurso + '/' + id, authorizationService.getHeaderAuthorization());
        };

        vm.delete = function(id){
          return $http.delete(recurso + '/' + id, authorizationService.getHeaderAuthorization());
        };

        function save(usuario){
            return $http.post(recurso, usuario, authorizationService.getHeaderAuthorization());
        }

        function update(usuario){
            return $http.put(recurso, usuario, authorizationService.getHeaderAuthorization());
        }

    }
})();