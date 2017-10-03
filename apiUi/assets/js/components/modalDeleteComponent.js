(function() {
    'use strict';

    angular.module('apiUi')
        .component('modalDeleteComponent', {
            templateUrl: 'apiUi/views/modal.html',
            controller: ModalDeleteComponent,
            bindings: {
                usuario: '='
            }
        });

    ModalDeleteComponent.$inject = ['usuarioService', 'toastr', '$location'];

    function ModalDeleteComponent(usuarioService, toastr, $location){
        var vm = this;

        vm.delete = function(){
            usuarioService.delete(vm.usuario.id)
                .then(deleteSucess).catch(throwException);
        };

        function deleteSucess() {
            toastr.success('Operação realizada com sucesso!');
            $location.path('/listar');
        }

        function throwException(response){
            if(response.data == null){
                toastr.error('Houve uma falha na comunicação com o recurso da API - Status: ' + response.xhrStatus);
            }
        }

    }

})();