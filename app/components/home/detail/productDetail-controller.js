'use strict';

angular.module('App.Controllers')
    .controller('productDetailCtrl', function ($scope, $modalInstance, NgMap, item) {

        $scope.item = item;
        NgMap.getMap().then(function(map){
          map.setCenter(item.geolocation);
        });
        $scope.image = '../../../styles/sass/theme/images/default.jpg';
        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
