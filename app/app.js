(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('test87App', [
            'angularGrid',
            'infinite-scroll',
            'mdr.file',
            'geolocation',
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
        .run(function ($log, editableOptions, Restangular) {
            $log.debug('testAlphaApp run');
            editableOptions.theme = 'bs3';
            Restangular.configuration.baseUrl = 'http://www.eduardgomez.me/gangashunter_backend';
            Restangular.configuration.suffix = '.php';
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
