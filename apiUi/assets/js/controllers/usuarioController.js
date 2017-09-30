angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

UsuarioController.$inject = ['usuarioService'];

function UsuarioController(usuarioService) {
    var vm = this;

    vm.usuario = {
        nome: '',
        sobrenome: '',
        login: '',
        senha: ''
    };

    vm.save = function () {
        usuarioService.save(vm.usuario)
            .then(saveSucess).catch(saveFailed);
    };

    function saveSucess(response) {
        //Faz algo
    }

    function saveFailed(response) {
        alert('Erro ao salvar o usuário: ' + '\n\nVerbo HTTP: ' + response.config.method
            + '\nUrl consumida: ' + response.config.url
            + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
    }
}
