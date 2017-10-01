(function() {
    'use strict';

    angular.module('apiUi')
        .config(RouterConfig);

    function RouterConfig($routeProvider){
        $routeProvider.when('/new', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/edit/:id', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/detail/:id', {
            templateUrl : 'apiUi/views/detail.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).when('/list', {
            templateUrl : 'apiUi/views/list.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).otherwise({
            redirectTo: '/list'
        });
    }

})();