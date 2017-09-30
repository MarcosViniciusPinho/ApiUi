(function() {
    'use strict';

    angular.module('apiUi')
        .config(RouterConfig);

    function RouterConfig($routeProvider){
        $routeProvider.when('/novo', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/listar', {
            templateUrl : 'apiUi/views/listar.html',
            controller: GridController,
            controllerAs: 'gridCtrl'
        }).otherwise({
            redirectTo: '/listar'
        });
    }

})();