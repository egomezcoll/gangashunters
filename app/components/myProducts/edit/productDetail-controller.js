'use strict';

angular.module('App.Controllers')
    .controller('myProductDetailCtrl', function ($scope, $modalInstance, $http, $state, NgMap, item, prendas, tallas, colors, marcas) {
        $scope.prendas = prendas;
        $scope.tallas = tallas;
        $scope.colors = colors;
        $scope.marcas = marcas;
        $scope.product = {
            'id': item.id,
            'idUser': item.idUser,
            'userName': item.userName,
            'imgs':item.imgs,
            'isGanga':item.isGanga,
            'latitude': item.latitude,
            'longitude': item.longitude,
            'geolocation': item.geolocation,
            'uploadDate':item.uploadDate,
            'name': item.name,
            'color': {
                'id': item.color,
                'name': item.colorName
            },
            'description': item.description,
            'genero': {
                'id': item.genero,
                'name': item.generoName
            },
            'marca': {
                'id': item.marca,
                'nombre': item.marcaName
            },
            'prenda': {
                'prenda': item.prenda,
                'name': item.prendaName
            },
            'status': item.status,
            'amount': item.price,
            'price': item.price,
            'talla': {
                'id': item.talla,
                'name': item.tallaName
            }
        };
        $scope.isUnchanged = function (user) {
            return angular.equals($scope.product, $scope.original);
        };
        console.log(item);
        $scope.zoomWidth = 300;
        $scope.zoomHeight = 400;
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

        NgMap.getMap()
            .then(function (map) {
                map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
                google.maps.event.trigger(map, 'resize');
                $scope.original = angular.copy($scope.product);
            });

        $scope.getImage = function (itm) {
            if (itm.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg';
            } else {
                return '../../styles/sass/theme/images/default.jpg';
            }
        };
        $scope.update = function () {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/updateMyProduct.php',
                    data: $scope.product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        var updated = {
                            'id': $scope.product.id,
                            'idUser':  $scope.product.idUser,
                            'userName':  $scope.product.userNname,
                            'imgs': $scope.product.imgs,
                            'isGanga': $scope.product.isGanga,
                            'latitude':  $scope.product.latitude,
                            'longitude':  $scope.product.longitude,
                            'geolocation':  $scope.product.geolocation,
                            'uploadDate': $scope.product.uploadDate,
                            'name':  $scope.product.name,
                            'color': $scope.product.color.id,
                            'colorName':  $scope.product.color.name,
                            'description':  $scope.product.description,
                            'genero': $scope.product.genero.id,
                            'generoName':  $scope.product.genero.name,
                            'marca':  $scope.product.marca.id,
                            'marcaName':  $scope.product.marca.nombre,
                            'prenda':  $scope.product.prenda.id,
                            'prendaName':  $scope.product.prenda.name,
                            'status':  $scope.product.status,
                            'price':  $scope.product.amount,
                            'talla': $scope.product.talla.id,
                            'tallaName':  $scope.product.talla.name

                        };
                        $modalInstance.close({'actions':'update', 'product':updated});
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos actualizado tu producto',
                            type: 'success',
                            showCancelButton: false,
                        });
                    }
                });
        };
        $scope.delete = function () {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/deleteMyProduct.php',
                    data: {'id':$scope.product.id, 'idUser':'1'},
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                        $modalInstance.close({'actions':'delete', 'product':$scope.product});
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos eliminado tu producto',
                            type: 'success',
                            showCancelButton: false,
                        });
                    }
                });
        };

        $scope.close = function () {
            $modalInstance.close('cancel');
        };
    });
