'use strict';

angular.module('App.Controllers')
  .controller('homeController', function ($scope, RESTFactory, angularGridInstance, $timeout, $sce, $modal) {
        $scope.searchTxt = '';
        RESTFactory.readParallelMultipleBatch(['getProducts'])
            .then(function (responseArray) {
                // $scope.colors = responseArray[0];
                // $scope.tallas = responseArray[1];
                // $scope.marcas = responseArray[2];
                // $scope.prendas = responseArray[3];
                $scope.products = responseArray[0];
                console.log($scope.products);
                $scope.productsOriginal = responseArray[0];
                /*imageService.loadImages()
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


                    });*/

                $scope.myPagingFunction = function () {
                    $scope.products.push({
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    }, {
                        price: '135',
                        tallaName: '240',
                        author: 'nobody@flickr.com (fabulous_redhead)',
                        author_id: '7842562@N07',
                        date_taken: '2015-11-16T21:49:47-08:00',
                        description: 'posteddd a photo',
                        link: 'https://www.flickr.com/photos/fabulous_redhead/22486967574/',
                        imgs: '11038720_1125224410824632_7664181595818693161_n.jpg',
                        uploadDate: '2015-11-18T07:24:24Z',
                        tags: '',
                        name: 'posteddd'
                    });
                    //$scope.productsOriginal = angular.copy($scope.products);
                };

                $scope.moreInformation = function (product) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
                        size: 'lg',
                        resolve: {
                            item: function () {
                                return product;
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


        //apply search and sort method
        $scope.$watch('searchTxt', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            val = val.toLowerCase();
            $scope.products = $scope.productsOriginal.filter(function (obj) {
                if (obj.description.toLowerCase()
                    .indexOf(val) !== -1 || obj.name.toLowerCase()
                    .indexOf(val) !== -1) {
                    return true;
                }
            });
            console.log($scope.products.length+"__"+$scope.productsOriginal.length);
        });

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

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
