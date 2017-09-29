(function() {
    'use strict';

    angular.module('apiUi')
        .config(RouterConfig);

    function RouterConfig($routeProvider){
        $routeProvider.when('/novo', {
            templateUrl : 'apiUi/views/form.html',
            controller: UsuarioController,
            controllerAs: 'usuarioCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }

})();