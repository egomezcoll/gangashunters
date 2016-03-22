'use strict';

angular.module('App.Controllers')
    .service('productsService', function ($http, RESTFactory, geolocation) {
        this.loadProducts = function (pag, filters) {
            return geolocation.getLocation()
                .then(function (data) {
                    return $http({
                        method: 'POST',
                        url: 'http://www.eduardgomez.me/gangashunter_backend/getProducts.php?lat=' + data.coords.latitude + '&long=' + data.coords.longitude + '&pag=' + pag,
                        data: filters,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                        }
                    });
                });

        };

        this.loadFilters = function () {
            return RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas']);
        };
    })
    .controller('homeController', function ($scope, $state, RESTFactory, productsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {
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

        $scope.goToProfile = function (idUser) {
            $state.go('perfil', {
                'idUser': idUser
            });
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

        productsService.loadProducts(0)
            .then(function (data) {
                $scope.pics = data.data;
                $scope.picsOriginal = data.data;
                cfpLoadingBar.complete();
                $scope.myPagingFunction = function () {
                    cfpLoadingBar.start();
                    productsService.loadProducts($scope.pag, $scope.filters)
                        .then(function (data) {
                            if (data.data.length > 0) {
                                angular.forEach(data.data, function (item) {
                                    $scope.pics.push(item);
                                });
                                $scope.pag = $scope.pag + $scope.incrementPag;
                                $scope.picsOriginal = angular.copy($scope.pics);
                            } else {
                                if (!$scope.noMoreResultsShowed) {
                                    $scope.noMoreResultsShowed = true;
                                    //no new results
                                    // swal({
                                    //     title: 'Ops!',
                                    //     text: 'Lo sentimos, ¡no hemos encontrado más resultados!',
                                    //     timer: 2000,
                                    //     showConfirmButton: false
                                    // });
                                }
                            }

                            cfpLoadingBar.complete();

                        });
                };

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
                    if (numberOfProducts - validProduct.length > 1) {
                        console.log(validProduct.length + '_' + numberOfProducts);
                        console.log(validProduct.length - numberOfProducts);
                        console.log($scope.filters);

                        if (val.length > 0) {
                            $scope.filters.textInput = $scope.search.text;
                        }
                        cfpLoadingBar.start();
                        productsService.loadProducts($scope.pag, $scope.filters)
                            .then(function (data) {
                                if (data.data.length > 0) {
                                    angular.forEach(data.data, function (item) {
                                        $scope.pics.push(item);
                                        $scope.picsOriginal.push(item);
                                    });
                                    $scope.pag = $scope.pag + $scope.incrementPag;
                                    //$scope.picsOriginal = angular.copy($scope.pics);
                                    $scope.noMoreResultsShowed = false;
                                }

                                cfpLoadingBar.complete();

                            });
                    }
                };

                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'components/home/detail/productDetail.html',
                        controller: 'productDetailCtrl',
                        size: 'lg',
                        backdrop: 'static',
                        keyboard: false,
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

        productsService.loadFilters()
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });
    });
