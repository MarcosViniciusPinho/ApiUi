angular.module('apiUi')
    .controller('gridCtrl', GridController);

GridController.$inject = ['usuarioService'];

function GridController(usuarioService) {
    var vm = this;

    listar();

    function listar() {
        usuarioService.findAll()
            .then(findAllSucess).catch(findAllFailed);
    }

    function findAllSucess(response) {
        vm.usuarios = response.data;
    }

    function findAllFailed(response) {
        alert('Erro na listagem dos usuarios: ' + '\n\nVerbo HTTP: ' + response.config.method
            + '\nUrl consumida: ' + response.config.url
            + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
    }

}
