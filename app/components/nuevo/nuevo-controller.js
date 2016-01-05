'use strict';

angular.module('App.Controllers')
    .controller('nuevoController', function ($scope, RESTFactory, $http) {
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
        $scope.product = {
            isGanga: false
        };
        $scope.file = null;

        RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas'])
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });

        $scope.checkProductAttr = function () {
            var count = 0;
            var k = 0;
            for (k in $scope.product) {
                if ($scope.product.hasOwnProperty(k)) {
                    count = count + 1;
                }
            }
            if (count < 8) {
                return true;
            } else {
                if ($scope.product.name.length > 0 && $scope.product.description.length > 0 && $scope.product.amount > 0) {
                    return false;
                } else {
                    return true;
                }

            }
        };

        $scope.addProduct = function () {
          console.log($scope.product);
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewProduct.php',
                    data: $scope.product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    console.log(response);
                });
        };

        $scope.$watch('file', function (newValue, oldValue) {
            if (oldValue !== newValue) {
                $scope.images.push(JSON.parse(newValue)[0].name);
                $scope.product.images = $scope.images;
            }
            return;
        });
    });

// $http.get('http://www.eduardgomez.me/gangashunter_backend/getColors.php')
//     .then(function (response) {
//         $scope.colors = response.data;
//     });
