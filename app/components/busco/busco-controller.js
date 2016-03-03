'use strict';

angular.module('App.Controllers')
    .service('buscoService', function ($q, $http, RESTFactory) {
        this.loadBusco = function () {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getBuscos.php?id=1');
        };

        this.addBusco = function (product) {
            return $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewBusco.php',
                data: product,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            });
        };

        this.loadOptions = function () {
            return RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas']);
        };
    })

.controller('buscoController', function ($scope, buscoService, $timeout, $sce, $modal) {
    $scope.product = {
        'idUser': 1
    };
    $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
    $scope.generos = [{
        'id': 0,
        'name': 'Mujer'
    }, {
        'id': 1,
        'name': 'Hombre'
    }, {
        'id': 2,
        'name': 'Unisex'
    }];

    buscoService.loadOptions()
        .then(function (responseArray) {
            $scope.colors = responseArray[0];
            $scope.tallas = responseArray[1];
            $scope.marcas = responseArray[2];
            $scope.prendas = responseArray[3];
        });

    $scope.deliberatelyTrustDangerousSnippet = function (text) {
        return $sce.trustAsHtml(text);
    };

    $scope.addBusco = function () {
        buscoService.addBusco($scope.product)
            .then(function (response) {
                if (response.status === 200) {
                    sweetAlert({
                        title: 'Buen trabajo!',
                        text: 'Buscaremos la prenda ' + $scope.product.prenda.name + ' de ' + $scope.product.marca.nombre + ' por ti',
                        type: 'success',
                        showCancelButton: false,
                    });

                    $scope.product = {
                        'idUser': 1
                    };

                    buscoService.loadBusco()
                        .then(function (response) {
                            $scope.buscos = response.data;
                        });
                }
            });
    };

    buscoService.loadBusco()
        .then(function (response) {
            $scope.buscos = response.data;
        });
});
