'use strict';

angular.module('App.Controllers')
    .service('productsService', function ($q, $http, RESTFactory, geolocation) {
        this.loadProducts = function () {
            return geolocation.getLocation()
                .then(function (data) {
                    return $http.get('http://www.eduardgomez.me/gangashunter_backend/getProducts.php?lat=' + data.coords.latitude + '&long=' + data.coords.longitude);
                });

        };

        this.loadFilters = function () {
            return RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas']);
        };
    })
    .controller('homeController', function ($scope, RESTFactory, productsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist) {
        $scope.search = {
            text: ''
        };
        $scope.filters = {
            low: 0,
            high: 2000,
            isGanga: false
        };
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.pics = $scope.picsOriginal = [];
        $scope.translate = function (value) {
            return value + '€';
        };

        //apply search and sort method
        $scope.$watch('search.text', function (val, oldValue) {
            if (val === oldValue) {
                return;
            }
            $scope.filterProducts(val);
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
        productsService.loadProducts()
            .then(function (data) {
                $scope.pics = data.data;
                $scope.picsOriginal = data.data;
                console.log(data);

                $scope.myPagingFunction = function () {
                    $scope.pics.push({
                        "id": "18",
                        "idUser": "1",
                        "name": "sfgsdg",
                        "description": "asfdaf",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "606",
                        "marcaName": "1901",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "5",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:58",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "17",
                        "idUser": "1",
                        "name": "sfgsdg",
                        "description": "asfdaf",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "606",
                        "marcaName": "1901",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "5",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:56",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "16",
                        "idUser": "1",
                        "name": "adasdf",
                        "description": "asdf",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "6",
                        "colorName": "Amarillo",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:53",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "15",
                        "idUser": "1",
                        "name": "hhhh",
                        "description": "asdfasfd",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "8",
                        "tallaName": "38",
                        "marca": "605",
                        "marcaName": "0914",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:48",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "14",
                        "idUser": "1",
                        "name": "hhhh",
                        "description": "asdfasfd",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "8",
                        "tallaName": "38",
                        "marca": "605",
                        "marcaName": "0914",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:46",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "10",
                        "idUser": "1",
                        "name": "afdafdas",
                        "description": "safasf",
                        "prenda": "53",
                        "prendaName": "Americana",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "444",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:43",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "3",
                        "idUser": "1",
                        "name": "sdg",
                        "description": "asdf",
                        "prenda": "0",
                        "prendaName": "",
                        "talla": "36",
                        "tallaName": "",
                        "marca": "2",
                        "marcaName": "",
                        "color": "0",
                        "colorName": "",
                        "price": "88",
                        "geolocation": "555,55",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:38",
                        "status": "1",
                        "isGanga": "1"
                    }, {
                        "id": "4",
                        "idUser": "1",
                        "name": "hola",
                        "description": "asdfasdf",
                        "prenda": "4",
                        "prendaName": "",
                        "talla": "23",
                        "tallaName": "",
                        "marca": "605",
                        "marcaName": "",
                        "color": "6",
                        "colorName": "",
                        "price": "44",
                        "geolocation": "555,55",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:34",
                        "status": "1",
                        "isGanga": "1"
                    }, {
                        "id": "5",
                        "idUser": "1",
                        "name": "test",
                        "description": "ERB",
                        "prenda": "53",
                        "prendaName": "Americana",
                        "talla": "25",
                        "tallaName": "37",
                        "marca": "151",
                        "marcaName": "Affinity",
                        "color": "19",
                        "colorName": "Azul cielo",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "2016-01-07 23:43:29",
                        "status": "1",
                        "isGanga": "1"
                    }, {
                        "id": "6",
                        "idUser": "1",
                        "name": "sss",
                        "description": "sfgs",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "606",
                        "marcaName": "1901",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "555",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "1"
                    }, {
                        "id": "7",
                        "idUser": "1",
                        "name": "sss",
                        "description": "sfgs",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "606",
                        "marcaName": "1901",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "555",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "9",
                        "idUser": "1",
                        "name": "sss",
                        "description": "sfgs",
                        "prenda": "50",
                        "prendaName": "Albornoz",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "606",
                        "marcaName": "1901",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "555",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg,12240033_1657496207855484_6449954194415874504_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "11",
                        "idUser": "1",
                        "name": "afdafdas",
                        "description": "safasf",
                        "prenda": "53",
                        "prendaName": "Americana",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "444",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "12",
                        "idUser": "1",
                        "name": "afd",
                        "description": "asdf",
                        "prenda": "53",
                        "prendaName": "Americana",
                        "talla": "25",
                        "tallaName": "37",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "13",
                        "idUser": "1",
                        "name": "afd",
                        "description": "asdf",
                        "prenda": "53",
                        "prendaName": "Americana",
                        "talla": "25",
                        "tallaName": "37",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "5",
                        "colorName": "Azul",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "11038720_1125224410824632_7664181595818693161_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "19",
                        "idUser": "1",
                        "name": "asdfasfd",
                        "description": "asdfasdf",
                        "prenda": "43",
                        "prendaName": "Anillo",
                        "talla": "25",
                        "tallaName": "37",
                        "marca": "2",
                        "marcaName": "2xist",
                        "color": "33",
                        "colorName": "Azul marino",
                        "price": "44",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "12377667_198894087121882_6610776894231804132_o.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    }, {
                        "id": "20",
                        "idUser": "1",
                        "name": "asdfa",
                        "description": "asfda",
                        "prenda": "49",
                        "prendaName": "Anorak",
                        "talla": "24",
                        "tallaName": "36",
                        "marca": "1",
                        "marcaName": "24hrs",
                        "color": "19",
                        "colorName": "Azul cielo",
                        "price": "33",
                        "geolocation": "41.4925928,2.0763349",
                        "imgs": "12240033_1657496207855484_6449954194415874504_n.jpg",
                        "uploadDate": "0000-00-00 00:00:00",
                        "status": "1",
                        "isGanga": "0"
                    });
                    $scope.picsOriginal = angular.copy($scope.pics);
                };

                $scope.filterProducts = function (val) {
                    var validProduct = [];
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
                        //check if is Ganga
                        if (item.isGanga == $scope.filters.isGanga) {
                            var filtersPassed = 1;
                            var notValid = false;

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

                            if (!notValid) {
                                validProduct.push(item);
                            }

                        }
                    });

                    //result of filtering
                    $scope.pics = validProduct;
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

        productsService.loadFilters()
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            })
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
