'use strict';

angular.module('App.Controllers')
    .service('myProductsService', function ($http, RESTFactory, geolocation) {
        this.loadMyProducts = function (pag, filters) {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getMyProducts.php?id=1');
        };
    })
    .controller('myProductsController', function ($scope, RESTFactory, myProductsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
        RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas'])
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });

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
        cfpLoadingBar.start();

        myProductsService.loadMyProducts(0)
            .then(function (data) {
                $scope.pics = data.data;
                cfpLoadingBar.complete();
                $scope.moreInformation = function (pic, index) {
                    var modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'components/myProducts/edit/productDetail.html',
                        controller: 'myProductDetailCtrl',
                        size: 'lg',
                        resolve: {
                            item: function () {
                                return pic;
                            },
                            prendas: function () {
                                return $scope.prendas;
                            },
                            tallas: function () {
                                return $scope.tallas;
                            },
                            colors: function () {
                                return $scope.colors;
                            },
                            marcas: function () {
                                return $scope.marcas;
                            }
                        }
                    });

                    modalInstance.result.then(function (action) {
                        if (action.actions === 'update') {
                          $scope.pics[index] = action.product;
                        } else {
                          $scope.pics.splice(index, 1);
                        }
                    }, function () {

                    });
                };
            });

    });
