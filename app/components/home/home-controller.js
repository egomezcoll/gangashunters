'use strict';

angular.module('App.Controllers')
    .service('imageService', function ($q, $http) {
        this.loadImages = function () {
            //return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=purse&format=json&jsoncallback=JSON_CALLBACK");
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getProducts.php');
        };
    })
    .controller('homeController', function ($scope, RESTFactory, imageService, angularGridInstance, $timeout, $sce, $modal) {
        $scope.searchTxt = '';
        //  RESTFactory.readParallelMultipleBatch(['getProducts'])
        //    .then(function (responseArray) {
        // $scope.colors = responseArray[0];
        // $scope.tallas = responseArray[1];
        // $scope.marcas = responseArray[2];
        // $scope.prendas = responseArray[3];
        //  $scope.products = responseArray[0];
        //  console.log($scope.products);
        //  $scope.productsOriginal = responseArray[0];
        $scope.searchTxt = '';

        //apply search and sort method
        $scope.$watch('searchTxt', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            val = val.toLowerCase();
            $scope.pics = $scope.picsOriginal.filter(function (obj) {
                if (obj.description.toLowerCase()
                    .indexOf(val) !== -1 || obj.name.toLowerCase()
                    .indexOf(val) !== -1) {
                    return true;
                }
            });
        });

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
            } else {
                return '../../styles/sass/theme/images/logo.png';
            }
        };
        imageService.loadImages()
            .then(function (data) {
                $scope.pics = data.data;
                $scope.picsOriginal = data.data;
                console.log(data);

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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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

                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'components/busco/detail/buscoProductDetail.html',
                        controller: 'buscoProductDetailCtrl',
                        size: 'lg',
                        resolve: {
                            item: function () {
                                return pic;
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                    }, function () {
                        //$log.info('Modal dismissed at: ' + new Date());
                    });
                };
            });
    })
    .controller('productDetailCtrl', function ($scope, $modalInstance, item) {

        $scope.item = item;

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
