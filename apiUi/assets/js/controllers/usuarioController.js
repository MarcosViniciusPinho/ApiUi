angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

UsuarioController.$inject = ['usuarioService', '$location', '$routeParams', 'toastr'];

function UsuarioController(usuarioService, $location, $routeParams, toastr) {
    var vm = this;

    vm.usuario = {
        nome: '',
        sobrenome: '',
        login: '',
        senha: ''
    };

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
        toastr.success('Operação realizada com sucesso!');
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
        toastr.error('Houve uma falha na comunicação com o recurso da API - Status: ' + response.xhrStatus);
    }
}
