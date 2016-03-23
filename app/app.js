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
        .run(function ($log, editableOptions, Restangular, $rootScope, $http, $state, timeAgo) {
            $log.debug('testAlphaApp run');
            timeAgo.settings.overrideLang = 'es_LA';
            editableOptions.theme = 'bs3';
            Restangular.configuration.baseUrl = 'http://www.eduardgomez.me/gangashunter_backend';
            Restangular.configuration.suffix = '.php';

            if (localStorage.getItem('user')) {
                $rootScope.user = JSON.parse(localStorage.getItem('user'));
            }

            $rootScope.$on('$stateChangeStart', function (event, toState) {
                initTooltipster();
                if (toState.name === 'login') {
                    if (!localStorage.getItem('user')) {
                        return;
                    } else {
                        //event.preventDefault();
                        //  $state.go('home');
                        return;
                    }
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
                        localStorage.setItem('user', JSON.stringify(response.data[0]));
                        $rootScope.user = response.data[0];
                        $state.go('home');
                    });

            });

            var initTooltipster = function () {
                setTimeout(function () {
                    var offeringTooltip = "<div class='menuUser'><div class='row'><div class='col-sm-6 userOption' id='myProducts'><span class='glyphicon glyphicon-briefcase' aria-hidden='true'></span><span class='glyphicon-class'>Mis Productos</span></div><div class='col-sm-6 userOption' id='favoritos'><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon-class'>Favoritos</span></div></div><div class='row'><div class='col-sm-6 userOption' id='config'><span class='glyphicon glyphicon-cog' aria-hidden='true'></span><span class='glyphicon-class'>Configuración</span></div><div class='col-sm-6 userOption' id='cerrarSession'><span class='glyphicon glyphicon-off' aria-hidden='true'></span><span class='glyphicon-class'>Cerrar Sessión</span></div></div></div>";
                    //instantiate this tooltip with the HTML generated before
                    $('#userPanel')
                        .tooltipster({
                            theme: 'tooltipster-shadow',
                            position: 'bottom',
                            interactive: 'true',
                            trigger: 'hover',
                            contentAsHTML: true,
                            functionReady: function () {
                                $('#cerrarSession')
                                    .click(function () {
                                        localStorage.removeItem('user');
                                        $rootScope.user = null;
                                        $('#userPanel')
                                            .tooltipster('hide');
                                        $state.go('login');
                                    });
                                $('#favoritos')
                                    .click(function () {
                                      $('#userPanel')
                                          .tooltipster('hide');
                                        $state.go('favoritos');
                                    });
                                $('#myProducts')
                                    .click(function () {
                                      $('#userPanel')
                                          .tooltipster('hide');
                                        $state.go('myProducts');
                                    });
                                $('#config')
                                    .click(function () {
                                      $('#userPanel')
                                          .tooltipster('hide');
                                        $state.go('config');
                                    });

                            }
                        });

                    $('#userPanel')
                        .tooltipster('update', offeringTooltip);
                }, 1500);
            };
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
