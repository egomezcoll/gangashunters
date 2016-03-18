'use strict';

angular.module('App.Controllers')
    .service('configService', function ($http, RESTFactory, geolocation) {
        this.loadFollowedPeople = function () {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFollowedPeople.php?idUser=1');
        };
        this.addFollowed = function (idUserFollowed) {
            return $http({
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
            });
        };

        this.removeFollowed = function (idUserFollowed) {
            return $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/deleteFollowed.php',
                data: {
                    'idUser': '1',
                    'idUserFollowed': idUserFollowed
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            });
        };
        this.loadFollowedPeople = function () {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFollowedPeople.php?idUser=1');
        };
    })
    .controller('configController', function ($scope, RESTFactory, configService, $timeout, $filter, $sce, cfpLoadingBar) {

        configService.loadFollowedPeople()
            .then(function (response) {
                $scope.followedPeople = response.data;
                angular.forEach($scope.followedPeople, function (item) {
                    item.isFollowed = true;
                });
            });

        $scope.addRemoveFollowed = function (people) {
            if (people.isFollowed) {
                $scope.addToMiRed(people);
            } else {
                $scope.removeFromMiRed(people);
            }
        };
        $scope.addToMiRed = function (people) {
            configService.addFollowed(people.id)
                .then(function (response) {
                    people.isFollowed = true;
                });
        };

        $scope.removeFromMiRed = function (people) {
            configService.removeFollowed(people.id)
                .then(function (response) {
                    people.isFollowed = false;
                });
        };
    });
