'use strict';

angular.module('App.Controllers')
    .controller('productDetailCtrl', function ($scope, $modalInstance, $http, $state, NgMap, item) {

        $scope.item = item;
        $scope.zoomWidth = 300;
        $scope.zoomHeight = 400;
        console.log(item);
        setTimeout(function(){
          $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();

        },3000);
        NgMap.getMap()
            .then(function (map) {
                map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
                google.maps.event.trigger(map, 'resize');
                var img = document.getElementById('img');

                if(img.naturalWidth < $scope.zoomHeight){
                  $scope.zoomHeight = img.naturalWidth;
                }

                if(img.naturalWidth < $scope.zoomWidth){
                  $scope.zoomWidth = img.naturalWidth;
                }
                console.log(img.clientWidth);
                console.log(img.clientHeight);

            });

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg';
            } else {
                return '../../styles/sass/theme/images/default.jpg';
            }
        };
        $scope.ok = function () {
            var product = {
                "idProduct": item.id,
                "productName": item.name,
                "price": item.price,
                "userId":1,
                "userName":'Eduard',
                "idUserOwner":item.idUser,
                "nameOwner":item.userName
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
                        $state.go('inbox',{'id':response.data[0].id});
                    }
                });
        };

        $scope.close = function () {
            $modalInstance.close('cancel');
        };
    });
