(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('test87App', [
      'angularGrid',
      'infinite-scroll',
        'appverse.rest',
        'appverse.detection',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'xeditable',
        'ngGrid',
        'appverse.router',
        'App.Controllers',
        'appverse'
    ]).run(function ($log, editableOptions) {
        $log.debug('testAlphaApp run');
        editableOptions.theme = 'bs3';
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
    angular.module('test87App').animation('.fade-in', function () {
        return {
            enter: function (element, done) {
                element.css({ opacity: 0 }).animate({ opacity: 1 }, 1000, done);
            }
        };
    });
}());
