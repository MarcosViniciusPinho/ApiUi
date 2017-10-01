angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

UsuarioController.$inject = ['usuarioService', '$location', '$routeParams'];

function UsuarioController(usuarioService, $location, $routeParams) {
    var vm = this;

    listar();

    carregarUsuario();

    vm.save = function () {
        usuarioService.saveOrUpdate(vm.usuario)
            .then(saveSucess).catch(saveFailed);
    };

    vm.back = function(){
        returnToOrigin();
    };

    function listar() {
        usuarioService.findAll()
            .then(findAllSucess).catch(findAllFailed);
    }

    function carregarUsuario(){
        if($routeParams != undefined && $routeParams.id != undefined){
            usuarioService.getUsuario($routeParams.id)
                .then(getUsuarioSucess).catch(getUsuarioFailed);
        }
    }

    function returnToOrigin(){
        $location.path('/listar');
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

    function getUsuarioSucess(response) {
        vm.usuario = response.data;
    }

    function getUsuarioFailed(response) {
        throwException(response);
    }

    function throwException(response){
        alert('Erro ao salvar o usuário: ' + '\n\nVerbo HTTP: ' + response.config.method
            + '\nUrl consumida: ' + response.config.url
            + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
    }
}
