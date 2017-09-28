(function() {
    'use strict';

    angular.module('apiUi')
        .component('apiUiGridComponent', {
            templateUrl: 'apiUi/views/listar.html',
            controller: GridComponent,
            controllerAs: 'gridComponent'
    });

    function GridComponent(){
        var vm = this;

        vm.usuarios = [{"nome":"Marcos", "sobrenome": "Pinho", "login": "MarcosPinho"},
            {"nome":"Joao", "sobrenome": "Almeida", "login": "Joaozinho"},
            {"nome":"Fernanda", "sobrenome": "Machado", "login": "Nanda"},
            {"nome":"Sabrina", "sobrenome": "Cartaxo", "login": "Linda"}];

    }

})();