'use strict';

angular.module('App.Controllers')
    .controller('inboxController', function ($scope) {
        $scope.messages = [
          {
              "id":1,
              "idUser":1,
              "text":"Hola, que tal?"
          },{
              "id":2,
              "idUser":2,
              "text":"bien, bien"
          },{
              "id":3,
              "idUser":2,
              "text":"y tu?"
          }
        ];
    });
