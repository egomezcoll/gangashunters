'use strict';

angular.module('App.Controllers')
    .service('perfilService', function ($http) {
        this.loadProducts = function (idUser) {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getMyProducts.php?id=' + idUser);
        };
        this.loadUserInfo = function (idUser) {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getMyUserInfo.php?id=' + idUser);
        };

    })
    .controller('perfilController', function ($scope, $state, perfilService, angularGridInstance, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {
        $scope.translate = function (value) {
            return value + '€';
        };
        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg';
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

        $(window)
            .scroll(function () {
                $scope.height = $(window)
                    .scrollTop();
                $scope.$evalAsync($scope.height);
            });
        cfpLoadingBar.start();
        perfilService.loadUserInfo($state.params.idUser)
            .then(function (data) {
                $scope.profileInfo = data.data[0];
            });
        perfilService.loadProducts($state.params.idUser)
            .then(function (data) {
                $scope.pics = data.data;
                $scope.picsOriginal = data.data;
                cfpLoadingBar.complete();
                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
                        size: 'lg',
                        backdrop: 'static',
                        keyboard: false,
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
