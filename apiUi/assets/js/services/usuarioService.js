(function() {
    'use strict';

    angular
        .module('apiUi')
        .service('usuarioService', UsuarioService);

    UsuarioService.$inject = ['$http', '$base64'];

    function UsuarioService($http, $base64) {

        var vm = this;
        var recurso = 'http://localhost:8081/api/usuarios';

        vm.findAll = function(){
            return $http.get(recurso, {
                headers: {  'Authorization': 'Basic ' + $base64.encode('Marcos:Pinho') }
            });
        };

        vm.saveOrUpdate = function(usuario){
          return usuario.id != null ? update(usuario) : save(usuario);
        };

        vm.getUsuario = function(id){
            return $http.get(recurso + '/' + id);
        };

        vm.delete = function(id){
          return $http.delete(recurso + '/' + id);
        };

        function save(usuario){
            return $http.post(recurso, usuario);
        }

        function update(usuario){
            return $http.put(recurso, usuario);
        }

    }
})();