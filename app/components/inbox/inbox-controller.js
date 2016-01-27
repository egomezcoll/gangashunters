'use strict';

angular.module('App.Controllers')
    .controller('inboxController', function ($scope, $http, $interval, $rootScope) {
        $scope.messages = [];
        $scope.lastId = 0;

        $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=14&message=' + $scope.lastId)
            .then(function (response) {
                $scope.messages = response.data;
                $scope.lastId = $scope.messages[response.data.length - 1].id;
            });

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            $interval.cancel(interval);
        });

        var interval = $interval(function () {
            $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=14&message=' + $scope.lastId, {
                    ignoreLoadingBar: true
                })
                .then(function (response) {
                    if (response.data.length > 0) {
                        response.data.forEach(function (item) {
                            $scope.messages.push(item);
                            $scope.lastId = item.id;
                        });
                    }
                });
        }, 5000);

    });
