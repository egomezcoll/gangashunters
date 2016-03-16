'use strict';

angular.module('App.Controllers')
    .service('miRedProductsService', function ($http, RESTFactory) {
        this.loadProducts = function () {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFollowedProducts.php?idUser=1');
        };

        this.loadFilters = function () {
            return RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas']);
        };
    })
    .controller('miRedController', function ($scope, RESTFactory, miRedProductsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {
        $scope.search = {
            text: ''
        };

        $scope.isTyping = $scope.noMoreResultsShowed = false;

        $scope.filters = {
            low: 0,
            high: 2000,
            isGanga: false
        };
        var timeoutIsTyping;

        $scope.pag = $scope.incrementPag = 10;
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.pics = $scope.picsOriginal = [];
        $scope.generos = [{
            'id': 0,
            'name': 'Mujer'
        }, {
            'id': 1,
            'name': 'Hombre'
        }, {
            'id': 2,
            'name': 'Unisex'
        }];
        $scope.translate = function (value) {
            return value + '€';
        };

        //apply search and sort method
        $scope.$watch('search.text', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            $timeout.cancel(timeoutIsTyping);
            $scope.isTyping = true;
            timeoutIsTyping = $timeout(function () {
                $scope.isTyping = false;
                $scope.filterProducts(val);
            }, 500);
        });

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg';
            } else {
                return '../../styles/sass/theme/images/default.jpg';
            }
        };

        $scope.getDistance = function (latitude, longitude) {
            var start = {
                lat: 41.509381,
                lng: 2.0774459
            };
            var end = {
                lat: latitude,
                lng: longitude
            };
            var distance = ngGeodist.getDistance(start, end, {
                exact: false,
                unit: 'km'
            });
            if (distance < 1) {
                return 'menos de 1 km';
            } else {
                return distance + ' km';
            }
        };
        $(window)
            .scroll(function () {
                $scope.height = $(window)
                    .scrollTop();
                $scope.$evalAsync($scope.height);
            });
        cfpLoadingBar.start();

        miRedProductsService.loadProducts()
            .then(function (data) {
                $scope.pics = data.data;
                $scope.picsOriginal = data.data;
                cfpLoadingBar.complete();
                $scope.filterProducts = function (val) {
                    var validProduct = [];
                    var numberOfProducts = $scope.picsOriginal.length;
                    val = val.toLowerCase();

                    //remove empty filters
                    for (var key in $scope.filters) {
                        if (typeof ($scope.filters[key]) === 'object' && $scope.filters[key].length === 0) {
                            delete $scope.filters[key];
                        }
                    }

                    //filter by text
                    $scope.pics = $scope.picsOriginal.filter(function (obj) {
                        if (obj.description.toLowerCase()
                            .indexOf(val) !== -1 || obj.name.toLowerCase()
                            .indexOf(val) !== -1) {
                            return true;
                        }
                    });

                    //filter by filters
                    angular.forEach($scope.pics, function (item) {
                        var filtersPassed = 0;
                        var notValid = false;
                        //check if is Ganga
                        if ($scope.filters.isGanga == true && item.isGanga == true) {
                            filtersPassed = filtersPassed + 1;
                        } else if ($scope.filters.isGanga == false) {
                            filtersPassed = filtersPassed + 1;
                        } else {
                            notValid = true;
                        }

                        //check amount
                        if (item.price >= $scope.filters.low && item.price <= $scope.filters.high) {
                            filtersPassed = filtersPassed + 1;
                        } else {
                            notValid = true;
                        }

                        //check if prenda
                        if ($scope.filters.selectedPrendas && !notValid) {
                            if ($filter('filter')($scope.filters.selectedPrendas, {
                                    id: item.prenda
                                })
                                .length > 0) {
                                filtersPassed = filtersPassed + 1;
                            } else {
                                notValid = true;
                            }
                        }

                        //check if marca
                        if ($scope.filters.selectedMarcas && !notValid) {
                            if ($filter('filter')($scope.filters.selectedMarcas, {
                                    id: item.marca
                                })
                                .length > 0) {
                                filtersPassed = filtersPassed + 1;
                            } else {
                                notValid = true;
                            }
                        }

                        //check if talla
                        if ($scope.filters.selectedTallas && !notValid) {
                            if ($filter('filter')($scope.filters.selectedTallas, {
                                    id: item.talla
                                })
                                .length > 0) {
                                filtersPassed = filtersPassed + 1;
                            } else {
                                notValid = true;
                            }
                        }

                        //check if color
                        if ($scope.filters.selectedColors && !notValid) {
                            if ($filter('filter')($scope.filters.selectedColors, {
                                    id: item.color
                                })
                                .length > 0) {
                                filtersPassed = filtersPassed + 1;
                            } else {
                                notValid = true;
                            }
                        }

                        //check if color
                        if ($scope.filters.selectedGeneros && !notValid) {
                            if ($filter('filter')($scope.filters.selectedGeneros, {
                                    id: item.genero
                                })
                                .length > 0) {
                                filtersPassed = filtersPassed + 1;
                            } else {
                                notValid = true;
                            }
                        }

                        if (!notValid) {
                            validProduct.push(item);
                        }
                    });

                    //result of filtering
                    $scope.pics = validProduct;
                };

                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
                        size: 'lg',
                        backdrop:'static',
                        keyboard:false,
                        resolve: {
                            item: function () {
                                return pic;
                            }
                        }
                    });

                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                    }, function () {

                    });
                };
            });

        miRedProductsService.loadFilters()
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });
    });
