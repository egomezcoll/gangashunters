'use strict';

angular.module('App.Controllers')
    .controller('inboxController', function ($scope, $http, $interval, $rootScope, $state, $filter) {
        $scope.messages = $scope.conversations = [];
        $scope.lastId = 0;
        $scope.search = $scope.myMessage = {
            'text': ''
        };
        $scope.paramsId = $state.params.id;
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
                        $('html, body')
                            .animate({
                                scrollTop: $(document)
                                    .height()
                            }, 'slow');
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

        $scope.isSameDay = function (messageDate, messageBeforeDate, invert) {
            if (invert === 'true') {
                if ($filter('timeAgo')(messageDate) !== $filter('timeAgo')(messageBeforeDate)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if ($filter('timeAgo')(messageDate) === $filter('timeAgo')(messageBeforeDate)) {
                    return true;
                } else {
                    return false;
                }
            }

        };
        $scope.sendMessage = function () {
            if ($scope.myMessage.text.length > 0) {
                var data = {
                    "idConversation": $scope.conversation.id,
                    "idUser": 1,
                    "text": $scope.myMessage.text
                };

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
                            $('html, body')
                                .animate({
                                    scrollTop: $(document)
                                        .height()
                                }, 'slow');
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
