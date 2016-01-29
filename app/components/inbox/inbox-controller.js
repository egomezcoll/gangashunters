'use strict';

angular.module('App.Controllers')
    .controller('inboxController', function ($scope, $http, $interval, $rootScope, $state) {
        $scope.messages = $scope.conversations = [];
        $scope.lastId = 0;
        $scope.myMessage = {
            'text': ''
        };
        $scope.conversation = {};

        $http.get('http://www.eduardgomez.me/gangashunter_backend/getConversations.php?idUser=1')
            .then(function (response) {
                $scope.conversations = response.data;
            });

        $http.get('http://www.eduardgomez.me/gangashunter_backend/getConversation.php?id=' + $state.params.id)
            .then(function (response) {
                $scope.conversation = response.data[0];
                console.log(response.data[0]);

                $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=' + $state.params.id + '&message=' + $scope.lastId)
                    .then(function (response) {
                        $scope.messages = response.data;
                        $scope.lastId = $scope.messages[response.data.length - 1].id;
                    });

                $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                    $interval.cancel(interval);
                });

                var interval = $interval(function () {
                    $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=' + $state.params.id + '&message=' + $scope.lastId, {
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
                $interval.cancel(interval);
            });

        $scope.sendMessage = function () {
            if ($scope.myMessage.text.length > 0) {
                var data = {
                    "idConversation": $scope.conversation.id,
                    "idUser": 1,
                    "text": $scope.myMessage.text
                };

                console.log(data);

                $http({
                        method: 'POST',
                        url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewMessage.php',
                        data: data,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'POST',
                            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 200) {
                            $scope.myMessage.text = '';
                        }
                    });
            }

        };
    })

.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});
