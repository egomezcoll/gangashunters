'use strict';

angular.module('App.Controllers')
    .service('bimageService', ["$q", "$http", function ($q, $http) {
        this.loadImages = function () {
            return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=purse&format=json&jsoncallback=JSON_CALLBACK");
        };
    }])

.controller('buscoController', ["$scope", "bimageService", "angularGridInstance", "$timeout", "$sce", "$modal", function ($scope, bimageService, angularGridInstance, $timeout, $sce, $modal) {
        $scope.searchTxt = '';

        //apply search and sort method
        $scope.$watch('searchTxt', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            val = val.toLowerCase();
            $scope.pics = $scope.picsOriginal.filter(function (obj) {
                if (obj.description.toLowerCase()
                    .indexOf(val) !== -1 || obj.title.toLowerCase()
                    .indexOf(val) !== -1) {
                    return true;
                }
            });
        });

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };
        bimageService.loadImages()
            .then(function (data) {
                data.data.items.forEach(function (obj) {
                    var desc = obj.description,
                        width = desc.match(/width="(.*?)"/)[1],
                        height = desc.match(/height="(.*?)"/)[1];

                    obj.actualHeight = height;
                    obj.actualWidth = width;
                    obj.description = obj.description.split("photo:")[0] + "photo:</p>";
                    obj.price = Math.floor((Math.random() * 100) + 5);
                });
                $scope.pics = data.data.items;
                $scope.picsOriginal = data.data.items;

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
    }])
    .controller('buscoProductDetailCtrl', ["$scope", "$modalInstance", "item", function ($scope, $modalInstance, item) {

        $scope.item = item;

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);

'use strict';

angular.module('App.Controllers')
    .service('imageService', ["$q", "$http", function ($q, $http) {
        this.loadImages = function () {
            return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=purse&format=json&jsoncallback=JSON_CALLBACK");
        };
    }])

.controller('homeController', ["$scope", "imageService", "angularGridInstance", "$timeout", "$sce", "$modal", function ($scope, imageService, angularGridInstance, $timeout, $sce, $modal) {
        $scope.searchTxt = '';

        //apply search and sort method
        $scope.$watch('searchTxt', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            val = val.toLowerCase();
            $scope.pics = $scope.picsOriginal.filter(function (obj) {
                if (obj.description.toLowerCase()
                    .indexOf(val) !== -1 || obj.title.toLowerCase()
                    .indexOf(val) !== -1) {
                    return true;
                }
            });
        });

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
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
                    obj.description = obj.description.split("photo:")[0] + "photo:</p>";
                    obj.price = Math.floor((Math.random() * 100) + 5);
                });
                $scope.pics = data.data.items;
                $scope.picsOriginal = data.data.items;

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
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
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
    }])
    .controller('productDetailCtrl', ["$scope", "$modalInstance", "item", function ($scope, $modalInstance, item) {

        $scope.item = item;

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);

'use strict';

angular.module('App.Controllers')
    .controller('nuevoController', ["$scope", "RESTFactory", "$http", "geolocation", "$state", function ($scope, RESTFactory, $http, geolocation, $state) {
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
        $scope.product = {
            isGanga: false
        };
        $scope.file = null;

        RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas'])
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });

        geolocation.getLocation()
            .then(function (data) {
                $scope.product.geolocation = data.coords.latitude + ',' + data.coords.longitude;
            });

        $scope.refreshResults = function ($select) {
            var search = $select.search.charAt(0)
                .toUpperCase() + $select.search.slice(1),
                list = angular.copy($select.items),
                FLAG = -1;
            //remove last user input
            list = list.filter(function (item) {
                return item.id !== FLAG;
            });

            if (!search) {
                //use the predefined list
                $select.items = list;
            } else {
                //manually add user input and set selection
                var userInputItem = {
                    id: FLAG,
                    nombre: search
                };
                $select.items = [userInputItem].concat(list);
                $select.selected = userInputItem;
            }
        };

        $scope.clear = function ($event, $select) {
            //stops click event bubbling
            $event.stopPropagation();
            //to allow empty field, in order to force a selection remove the following line
            $select.selected = undefined;
            //reset search query
            $select.search = undefined;
            //focus and open dropdown
            $select.activate();
        };

        $scope.checkProductAttr = function () {
            var count = 0;
            var k = 0;
            for (k in $scope.product) {
                if ($scope.product.hasOwnProperty(k)) {
                    count = count + 1;
                }
            }
            if (count < 9) {
                return true;
            } else {
                if ($scope.product.name.length > 0 && $scope.product.description.length > 0 && $scope.product.amount > 0) {
                    return false;
                } else {
                    return true;
                }

            }
        };

        $scope.addProduct = function () {
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewProduct.php',
                    data: $scope.product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        sweetAlert({
                            title: 'Buen trabajo!',
                            text: '¿Deseas registrar un nuevo producto?',
                            type: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'Sí',
                            cancelButtonText: 'No'
                        }, function (isConfirm) {
                            if (isConfirm) {
                                $state.go($state.current, {}, {reload: true});
                            } else {
                                $state.go('home');
                            }
                        });
                    }
                });
        };

        $scope.$watch('file', function (newValue, oldValue) {
            if (oldValue !== newValue) {
                $scope.images.push(JSON.parse(newValue)[0].name);
                $scope.product.images = $scope.images;
            }
            return;
        });
    }]);
