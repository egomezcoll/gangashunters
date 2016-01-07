'use strict';

angular.module('App.Controllers')
    .controller('nuevoController', function ($scope, RESTFactory, $http, geolocation, $state) {
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

        geolocation.getLocation()
            .then(function (data) {
                $scope.product.geolocation = data.coords.latitude + ',' + data.coords.longitude;
            });

        $scope.refreshResults = function ($select) {
            var search = $select.search.charAt(0)
                .toUpperCase() + $select.search.slice(1),
                list = angular.copy($select.items),
                FLAG = -1;
            //remove last user input
            list = list.filter(function (item) {
                return item.id !== FLAG;
            });

            if (!search) {
                //use the predefined list
                $select.items = list;
            } else {
                //manually add user input and set selection
                var userInputItem = {
                    id: FLAG,
                    nombre: search
                };
                $select.items = [userInputItem].concat(list);
                $select.selected = userInputItem;
            }
        };

        $scope.clear = function ($event, $select) {
            //stops click event bubbling
            $event.stopPropagation();
            //to allow empty field, in order to force a selection remove the following line
            $select.selected = undefined;
            //reset search query
            $select.search = undefined;
            //focus and open dropdown
            $select.activate();
        };

        $scope.checkProductAttr = function () {
            var count = 0;
            var k = 0;
            for (k in $scope.product) {
                if ($scope.product.hasOwnProperty(k)) {
                    count = count + 1;
                }
            }
            if (count < 9) {
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
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewProduct.php',
                    data: $scope.product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        sweetAlert({
                            title: 'Buen trabajo!',
                            text: '¿Deseas registrar un nuevo producto?',
                            type: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Sí',
                            cancelButtonText: 'No'
                        }, function (isConfirm) {
                            if (isConfirm) {
                                $state.go($state.current, {}, {reload: true});
                            } else {
                                $state.go('home');
                            }
                        });
                    }
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
