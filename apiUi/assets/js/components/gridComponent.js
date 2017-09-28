(function() {
    'use strict';

    angular.module('apiUi')
        .component('apiUiGridComponent', {
            templateUrl: 'apiUi/views/listar.html',
            controller: GridComponent,
            controllerAs: 'gridComponent'
    });

    GridComponent.$inject = ['usuarioService'];

    function GridComponent(usuarioService){
        var vm = this;

        vm.$onInit = function(){
            usuarioService.findAll().then(findAllSucess).catch(findAllFailed);
        };

        function findAllSucess(response){
            vm.usuarios = response.data;
        }

        function findAllFailed(response){
            alert('Erro na listagem dos usuarios: ' + '\n\nVerbo HTTP: '+ response.config.method
                + '\nUrl consumida: ' + response.config.url
                + '\nStatus: ' + response.xhrStatus);//TODO substituir quando estiver o toast
        }

    }

})();