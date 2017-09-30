angular.module('apiUi')
    .controller('gridCtrl', GridController);

GridController.$inject = ['usuarioService', '$location'];

function GridController(usuarioService, $location) {
    var vm = this;

    listar();

    vm.edit = function(usuario){
        redirectNextPage(usuario, '/cadastro');
    };

    vm.detail = function(usuario){
        redirectNextPage(usuario, '/detalhar');
    };

    function redirectNextPage(usuario, path){
        usuarioService.setUsuario(usuario);
        $location.path(path);
    }

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
