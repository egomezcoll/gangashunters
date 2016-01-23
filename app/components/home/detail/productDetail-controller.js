'use strict';

angular.module('App.Controllers')
    .controller('productDetailCtrl', function ($scope, $modalInstance, NgMap, item) {

        $scope.item = item;
        NgMap.getMap().then(function(map){
          map.setCenter(item.geolocation);
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
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
