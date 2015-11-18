'use strict';

angular.module('App.Controllers')
    .service('imageService', ['$q', '$http', function ($q, $http) {
        this.loadImages = function () {
            return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=purse&format=json&jsoncallback=JSON_CALLBACK");
        };
    }])
    .controller('homeController', function ($scope, imageService, angularGridInstance, $timeout,$sce) {
        $scope.searchTxt = '';

         //apply search and sort method
         $scope.$watch('searchTxt',function(val, oldValue){
            if(val === oldValue){
              return;
            }
             val = val.toLowerCase();
             $scope.pics = $scope.picsOriginal.filter(function(obj){
                if(obj.description.toLowerCase().indexOf(val) !== -1 || obj.title.toLowerCase().indexOf(val) !== -1) {
                 return true;
                }
             });
         });

         $scope.deliberatelyTrustDangerousSnippet = function(text) {
               return $sce.trustAsHtml(text);
             };
        imageService.loadImages()
            .then(function (data) {
                data.data.items.forEach(function (obj) {
                    var desc = obj.description,
                        width = desc.match(/width="(.*?)"/)[1],
                        height = desc.match(/height="(.*?)"/)[1];

                    obj.actualHeight = height;
                    obj.actualWidth = width;
                    obj.description = obj.description.split("photo:")[0]+"photo:</p>";
                    obj.price = Math.floor((Math.random() * 100) + 5);
                });
                $scope.pics = data.data.items;
                $scope.picsOriginal = data.data.items;

                $scope.refresh = function () {
                    angularGridInstance.gallery.refresh();
                };

                $scope.myPagingFunction = function () {
                    $scope.pics.push({
                        actualHeight: '135',
                        actualWidth: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        media: {
                            m: 'http://placehold.it/300x600/E97452/fff'
                        },
                        published: '2015-11-18T07:24:24Z',
                        tags: '',
                        title: 'posteddd'
                    },
                    {
                        actualHeight: '135',
                        actualWidth: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        media: {
                            m: 'http://placehold.it/300x600/E97452/fff'
                        },
                        published: '2015-11-18T07:24:24Z',
                        tags: '',
                        title: 'posteddd'
                    },
                    {
                        actualHeight: '135',
                        actualWidth: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        media: {
                            m: 'http://placehold.it/300x600/E97452/fff'
                        },
                        published: '2015-11-18T07:24:24Z',
                        tags: '',
                        title: 'posteddd'
                    },
                    {
                        actualHeight: '135',
                        actualWidth: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        media: {
                            m: 'http://placehold.it/300x600/E97452/fff'
                        },
                        published: '2015-11-18T07:24:24Z',
                        tags: '',
                        title: 'posteddd'
                    },
                    {
                        actualHeight: '135',
                        actualWidth: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        media: {
                            m: 'http://placehold.it/300x600/E97452/fff'
                        },
                        published: '2015-11-18T07:24:24Z',
                        tags: '',
                        title: 'posteddd'
                    });
                    $scope.picsOriginal = angular.copy($scope.pics);
                };
            });
    });
