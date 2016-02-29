(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('test87App', [
            'angularGrid',
            'infinite-scroll',
            'mdr.file',
            'geolocation',
            'ngGeodist',
            'yaru22.angular-timeago',
            'ngMap',
            'angular-loading-bar',
            'socialLogin',
            'appverse.rest',
            'appverse.detection',
            'ngAnimate',
            'ui.bootstrap',
            'angularRipple',
            'ui.select',
            'ngSanitize',
            'rzModule',
            'rt.resize',
            'xeditable',
            'appverse.router',
            'App.Controllers',
            'appverse'
        ])
        .config(function (socialProvider) {
            socialProvider.setGoogleKey('494974595380-r5tbv7l4e840c9esjmio5mq745b2noga.apps.googleusercontent.com');
            // socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
            socialProvider.setFbKey({
                appId: '295198694017705',
                apiVersion: 'v2.5'
            });
        })
        .run(function ($log, editableOptions, Restangular, $rootScope, $http, $state) {
            $log.debug('testAlphaApp run');
            editableOptions.theme = 'bs3';
            Restangular.configuration.baseUrl = 'http://www.eduardgomez.me/gangashunter_backend';
            Restangular.configuration.suffix = '.php';

            if (localStorage.getItem('user')) {
                $rootScope.user =  JSON.parse(localStorage.getItem('user'));
            }

            $rootScope.$on('$stateChangeStart', function (event, toState) {
                if (toState.name === 'login') {
                    return;
                }
                if (!localStorage.getItem('user')) {
                    event.preventDefault();
                    $state.go('login');
                }
            });
            $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
                console.log(userDetails);
                $http({
                        method: 'POST',
                        url: 'http://www.eduardgomez.me/gangashunter_backend/login.php',
                        data: userDetails,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'POST',
                            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                        }
                    })
                    .then(function (response) {
                        localStorage.setItem('user', JSON.stringify(response));
                        $rootScope.user = response;
                        $state.go('home');
                    });

            });

        });

    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
    angular.module('test87App')
        .animation('.fade-in', function () {
            return {
                enter: function (element, done) {
                    element.css({
                            opacity: 0
                        })
                        .animate({
                            opacity: 1
                        }, 1000, done);
                }
            };
        });
}());
