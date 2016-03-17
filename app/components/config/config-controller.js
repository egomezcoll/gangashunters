'use strict';

angular.module('App.Controllers')
    .service('configService', function ($http, RESTFactory, geolocation) {
      this.loadFollowedPeople = function () {
          return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFollowedPeople.php?idUser=1');
      };
    })
    .controller('configController', function ($scope, RESTFactory, configService,  $timeout, $filter, $sce, cfpLoadingBar) {

      configService.loadFollowedPeople().then(function(response){
          $scope.followedPeople = response.data;
      });
    });
