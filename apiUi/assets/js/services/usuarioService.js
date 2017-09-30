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

        vm.saveOrUpdate = function(usuario){
          return usuario.id != null ? update(usuario) : save(usuario);
        };

        function save(usuario){
            return $http.post(recurso, usuario);
        }

        function update(usuario){
            return $http.put(recurso, usuario);
        }

        vm.setUsuario = function(usuario){
            vm.usuario = usuario;
        };

        vm.getUsuario = function(){
            return vm.usuario;
        };

    }
})();