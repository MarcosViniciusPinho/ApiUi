angular.module('apiUi')
    .controller('gridCtrl', GridController);

GridController.$inject = ['usuarioService', 'toastr'];

function GridController(usuarioService, toastr) {
    var vm = this;

    vm.pesquisa= '';
    vm.orderByColumn = false;

    listar();

    vm.showModal = function(usuario){
        vm.usuario = usuario;
    };

    vm.orderColumn = function(column){
        vm.sortByColumn = column;
        vm.orderByColumn = !vm.orderByColumn;
    };

    function listar() {
        usuarioService.findAll()
            .then(findAllSucess).catch(throwException);
    }

    function findAllSucess(response) {
        vm.usuarios = response.data;
    }

    function throwException(response){
        if(response.data == null){
            toastr.error('Houve uma falha na comunicação com o recurso da API - Status: ' + response.xhrStatus);
        }
    }

}
