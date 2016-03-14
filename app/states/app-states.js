//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('test87App')
    .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

                ///////////////////////////////
                // 1-Redirects and Otherwise //
                ///////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                //                .when('/t?id', '/topics/:id')
                //                    .when('/t/:id', '/topics/:id')


                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                    .otherwise('/home');


                //////////////////////////
                // 2-State Configurations
                // Several states hav been configured:
                // home
                // tasks
                //
                //////////////////////////

                // We must configure states using $stateProvider.
                $stateProvider

                //////////
                // Home //
                //////////

                  .state('home', {
                    // Use a url of '/' to set a states as the 'index'.
                    url: '/home',
                    templateUrl: 'components/home/home.html',
                    controller: 'homeController'
                })
                .state('login', {
                  url: '/login',
                  templateUrl: 'components/login/login.html',
                  controller: 'loginController'
              })
                .state('nuevo', {
                  url: '/nuevo',
                  templateUrl: 'components/nuevo/nuevo.html',
                  controller: 'nuevoController'
              })  .state('busco', {
                  url: '/busco',
                  templateUrl: 'components/busco/busco.html',
                  controller: 'buscoController'
              }) .state('inbox', {
                  url: '/inbox/:id',
                  templateUrl: 'components/inbox/inbox.html',
                  controller: 'inboxController'
              }) .state('favoritos', {
                  url: '/favoritos',
                  templateUrl: 'components/favoritos/favoritos.html',
                  controller: 'favoritosController'
              }) .state('myProducts', {
                  url: '/mis-productos',
                  templateUrl: 'components/myProducts/myProducts.html',
                  controller: 'myProductsController'
              });
            }]);
