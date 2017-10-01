angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

UsuarioController.$inject = ['usuarioService', '$location', '$routeParams'];

function UsuarioController(usuarioService, $location, $routeParams) {
    var vm = this;

    listar();

    console.log("Id Usuario selecionado: " + $routeParams.id);

    vm.detail = function(usuario){
        redirectNextPage(usuario, '/detalhar');
    };

    vm.save = function () {
        usuarioService.saveOrUpdate(vm.usuario)
            .then(saveSucess).catch(saveFailed);
    };

    vm.back = function(){
        returnToOrigin();
    };

    function redirectNextPage(usuario, path){
        vm.usuario = usuario;
        $location.path(path);
    }

    function returnToOrigin(){
        $location.path('/listar');
    }

    function listar() {
        usuarioService.findAll()
            .then(findAllSucess).catch(findAllFailed);
    }

    function findAllSucess(response) {
        vm.usuarios = response.data;
    }

    function findAllFailed(response) {
        throwException(response);
    }

    function saveSucess() {
        returnToOrigin();
    }

    function saveFailed(response) {
        throwException(response);
    }

    function throwException(response){
        alert('Erro ao salvar o usuário: ' + '\n\nVerbo HTTP: ' + response.config.method
            + '\nUrl consumida: ' + response.config.url
            + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
    }
}
