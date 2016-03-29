'use strict';

angular.module('App.Controllers')
    .controller('productDetailCtrl', function ($scope, $modalInstance, $rootScope, $http, $state, NgMap, item) {

        $scope.item = item;
        $scope.zoomWidth = 300;
        $scope.zoomHeight = 400;
        $scope.imgSelected = 0;
        $scope.isFavorite = $scope.mainImage = $scope.isFollowed = $scope.recomendarEnabled = false;
        $scope.searchText = {
            'text': ''
        };
        $scope.blockTitle = 'Solamente los usuarios premium pueden bloquear este producto 24h';
        setTimeout(function () {
            $('[data-toggle="tooltip"]')
                .tooltip();
            $('.cloud-zoom, .cloud-zoom-gallery')
                .CloudZoom();
        }, 2000);
        $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/searchUsers.php',
                data: {
                    'searchText': $scope.searchText.text,
                    'idUser': 1
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            })
            .then(function (data) {
                $scope.users = data.data;
            });

        if (item.id !== $rootScope.user.id) {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/checkIsFavorito.php',
                    data: {
                        'idProduct': item.id,
                        'idUser': '1'
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            $scope.isFavorite = true;
                        }
                    }
                });

            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/checkIsFollowed.php',
                    data: {
                        'idUser': '1',
                        'idUserFollowed': item.idUser
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            $scope.isFollowed = true;
                        }
                    }
                });
        }
        NgMap.getMap()
            .then(function (map) {
                map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
                google.maps.event.trigger(map, 'resize');
                var img = document.getElementById('img');

                if (img.naturalWidth < $scope.zoomHeight) {
                    $scope.zoomHeight = img.naturalWidth;
                }

                if (img.naturalWidth < $scope.zoomWidth) {
                    $scope.zoomWidth = img.naturalWidth;
                }
            });

        $scope.recomendarA = function (id) {
            $scope.recomendarEnabled = !$scope.recomendarEnabled;
        };

        $scope.toggleRecomendar = function () {
            $scope.recomendarEnabled = !$scope.recomendarEnabled;
        };
        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                $scope.nextImages = product.imgs.split(',');
                return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + $scope.nextImages[0];
                //  return '../../styles/sass/theme/images/default.jpg';
            } else {
                $scope.nextImages = [];
                return '../../styles/sass/theme/images/default.jpg';
            }
        };
        $scope.mainImage = $scope.getImage(item);

        $scope.changeMainImage = function (index, nextImage) {
            $scope.imgSelected = index;
            $scope.mainImage = 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + nextImage;
            setTimeout(function () {
                $('.cloud-zoom, .cloud-zoom-gallery')
                    .CloudZoom();
            }, 300);

        };

        $scope.addToFavorites = function (id) {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewFavorito.php',
                    data: {
                        'idProduct': id,
                        'idUser': '1'
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos añadido este producto a tus favoritos',
                            type: 'success',
                            showCancelButton: false,
                        });
                        $scope.isFavorite = true;
                    }
                });
        };

        $scope.addToMiRed = function (idUserFollowed) {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewFollowed.php',
                    data: {
                        'idUser': '1',
                        'idUserFollowed': idUserFollowed
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos añadido a ' + item.userName + ' a tu red',
                            type: 'success',
                            showCancelButton: false,
                        });
                        $scope.isFollowed = true;
                    }
                });
        };

        $scope.ok = function () {
            var product = {
                "idProduct": item.id,
                "productName": item.name,
                "price": item.price,
                "userId": 1,
                "userName": 'Eduard',
                "idUserOwner": item.idUser,
                "nameOwner": item.userName
            };
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewConversation.php',
                    data: product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                        $modalInstance.close();
                        $state.go('inbox', {
                            'id': response.data[0].id
                        });
                    }
                });
        };

        $scope.close = function () {
            $modalInstance.close('cancel');
        };
    });
