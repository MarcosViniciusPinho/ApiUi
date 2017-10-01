(function() {
    'use strict';

    angular.module('apiUi')
        .config(RouterConfig);

    function RouterConfig($routeProvider){
        $routeProvider.when('/novo', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/edit/:id', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/detalhar/:id', {
            templateUrl : 'apiUi/views/detail.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/listar', {
            templateUrl : 'apiUi/views/listar.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).otherwise({
            redirectTo: '/listar'
        });
    }

})();