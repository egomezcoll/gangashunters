'use strict';

angular.module('App.Controllers')
    .service('favoritosService', function ($http, RESTFactory, geolocation) {
        this.loadFavorites = function () {
            return geolocation.getLocation()
                .then(function (data) {
                    return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFavoritos.php?id=1');
                });
        };

        this.removeFavorite = function (id) {
            return $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/deleteFavorito.php',
                data: {
                    'id': id,
                    'idUser': '1'
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            });
        };
    })
    .controller('favoritosController', function ($scope, RESTFactory, favoritosService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {

        $scope.translate = function (value) {
            return value + '€';
        };

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg'
            } else {
                return '../../styles/sass/theme/images/default.jpg';
            }
        };

        $scope.getDistance = function (latitude, longitude) {
            var start = {
                lat: 41.509381,
                lng: 2.0774459
            };
            var end = {
                lat: latitude,
                lng: longitude
            };
            var distance = ngGeodist.getDistance(start, end, {
                exact: false,
                unit: 'km'
            });
            if (distance < 1) {
                return 'menos de 1 km';
            } else {
                return distance + ' km';
            }
        };

        $scope.removeFromFavorites = function (id, index) {
            favoritosService.removeFavorite(id)
                .then(function (response) {
                    if (response.status === 200) {
                        $scope.pics.splice(index, 1);
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos eliminado este producto de tus favoritos',
                            type: 'success',
                            showCancelButton: false,
                        });
                    }
                });
        };
        cfpLoadingBar.start();

        favoritosService.loadFavorites()
            .then(function (data) {
                $scope.pics = data.data;
                cfpLoadingBar.complete();
                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
                        size: 'lg',
                        resolve: {
                            item: function () {
                                return pic;
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                    }, function () {

                    });
                };
            });

    });
