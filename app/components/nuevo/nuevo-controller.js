'use strict';

angular.module('App.Controllers')
    .controller('nuevoController', function ($scope, RESTFactory, $http) {
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = [];
        $scope.product = {
            name: '',
            description: '',
            isGanga: false
        };
        // $http.get('http://www.eduardgomez.me/gangashunter_backend/getColors.php')
        //     .then(function (response) {
        //         $scope.colors = response.data;
        //     });

        RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas'])
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });
    });
