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
        .run(function ($log, editableOptions, Restangular, $rootScope) {
            $log.debug('testAlphaApp run');
            editableOptions.theme = 'bs3';
            Restangular.configuration.baseUrl = 'http://www.eduardgomez.me/gangashunter_backend';
            Restangular.configuration.suffix = '.php';

            $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
                console.log('LOGGED IN USING GOOGLE');
                console.log(userDetails);
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
