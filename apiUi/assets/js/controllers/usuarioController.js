angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

UsuarioController.$inject = ['usuarioService', '$location'];

function UsuarioController(usuarioService, $location) {
    var vm = this;

    vm.usuario = {
        nome: '',
        sobrenome: '',
        login: '',
        senha: ''
    };

    function returnToOrigin(){
        $location.path('/listar');
    }

    vm.save = function () {
        usuarioService.save(vm.usuario)
            .then(saveSucess).catch(saveFailed);
    };

    vm.back = function(){
        returnToOrigin();
    };

    function saveSucess() {
        returnToOrigin();
    }

    function saveFailed(response) {
        alert('Erro ao salvar o usuário: ' + '\n\nVerbo HTTP: ' + response.config.method
            + '\nUrl consumida: ' + response.config.url
            + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
    }
}
