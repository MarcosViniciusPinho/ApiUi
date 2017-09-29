angular.module('apiUi')
    .controller('usuarioCtrl', UsuarioController);

function UsuarioController() {
    var vm = this;

    vm.usuario = {
        nome: '',
        sobrenome: '',
        login: '',
        senha: ''
    };

    vm.save = function () {
        alert('Usuario: ' + vm.usuario);
    };
}
