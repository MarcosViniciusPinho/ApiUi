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

    carregarUsuario();

    vm.save = function () {
        usuarioService.saveOrUpdate(vm.usuario)
            .then(saveSucess).catch(throwException);
    };

    vm.back = function(){
        returnToOrigin();
    };

    function carregarUsuario(){
        if($routeParams != undefined && $routeParams.id != undefined){
            usuarioService.getUsuario($routeParams.id)
                .then(getUsuarioSucess).catch(throwException);
        }
    }

    function returnToOrigin(){
        $location.path('/listar');
    }

    function saveSucess() {
        toastr.success('Operação realizada com sucesso!');
        returnToOrigin();
    }

    function getUsuarioSucess(response) {
        vm.usuario = response.data;
    }

    function throwException(response){
        if(response.data == null){
            toastr.error('Houve uma falha na comunicação com o recurso da API - Status: ' + response.xhrStatus);
        } else{
            var listagemDeErros = response.data.messagesBusiness;
            for(var i = 0; i < listagemDeErros.length; i++){
                toastr.error(listagemDeErros[i]);
            }
        }
    }

}
