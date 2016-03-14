'use strict';

angular.module('App.Controllers')
    .service('buscoService', ["$q", "$http", "RESTFactory", function ($q, $http, RESTFactory) {
        this.loadBusco = function () {
            return $http.get('http://www.eduardgomez.me/gangashunter_backend/getBuscos.php?id=1');
        };

        this.addBusco = function (product) {
            return $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewBusco.php',
                data: product,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            });
        };
        this.deleteBusco = function (id) {
            var obj = {
                'idBusco': id,
                'idUser': 1
            };
            return $http({
                method: 'POST',
                url: 'http://www.eduardgomez.me/gangashunter_backend/deleteBusco.php',
                data: obj,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                }
            });
        };

        this.loadOptions = function () {
            return RESTFactory.readParallelMultipleBatch(['getColors', 'getTallas', 'getMarcas', 'getPrendas']);
        };
    }])

.controller('buscoController', ["$scope", "buscoService", "$timeout", "$sce", "$modal", function ($scope, buscoService, $timeout, $sce, $modal) {
    $scope.product = {
        'idUser': 1
    };
    $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
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

    buscoService.loadOptions()
        .then(function (responseArray) {
            $scope.colors = responseArray[0];
            $scope.tallas = responseArray[1];
            $scope.marcas = responseArray[2];
            $scope.prendas = responseArray[3];
        });

    $scope.deliberatelyTrustDangerousSnippet = function (text) {
        return $sce.trustAsHtml(text);
    };

    $scope.addBusco = function () {
        buscoService.addBusco($scope.product)
            .then(function (response) {
                if (response.status === 200) {
                    sweetAlert({
                        title: 'Buen trabajo!',
                        text: 'Buscaremos la prenda ' + $scope.product.prenda.name + ' de ' + $scope.product.marca.nombre + ' por ti',
                        type: 'success',
                        showCancelButton: false,
                    });

                    $scope.product = {
                        'idUser': 1
                    };

                    buscoService.loadBusco()
                        .then(function (response) {
                            $scope.buscos = response.data;
                        });
                }
            });
    };
    $scope.deleteBusco = function (id, prenda, $index) {
        sweetAlert({
            title: '¡Ojo!',
            text: 'La búsqueda automática de la prenda ' + prenda + ' será eliminada',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '¡Sí, eliminar búsqueda!',
            closeOnConfirm: false
        }, function () {
            buscoService.deleteBusco(id)
                .then(function (response) {
                    if (response.status === 200) {
                        sweetAlert({
                            title: '¡Hecho!',
                            text: 'Hemos eliminado la búsqueda automática',
                            type: 'success',
                            showCancelButton: false,
                        });
                        $scope.buscos.splice($index, 1);
                    }
                });
        });
    };

    buscoService.loadBusco()
        .then(function (response) {
            $scope.buscos = response.data;
        });
}]);

'use strict';

angular.module('App.Controllers')
    .service('productsService', ["$http", "RESTFactory", "geolocation", function ($http, RESTFactory, geolocation) {
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
    }])
    .controller('homeController', ["$scope", "RESTFactory", "productsService", "angularGridInstance", "$timeout", "$filter", "$sce", "$modal", "ngGeodist", "cfpLoadingBar", "geolocation", function ($scope, RESTFactory, productsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {
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

        productsService.loadFilters()
            .then(function (responseArray) {
                $scope.colors = responseArray[0];
                $scope.tallas = responseArray[1];
                $scope.marcas = responseArray[2];
                $scope.prendas = responseArray[3];
            });
    }]);

'use strict';

angular.module('App.Controllers')
    .controller('productDetailCtrl', ["$scope", "$modalInstance", "$http", "$state", "NgMap", "item", function ($scope, $modalInstance, $http, $state, NgMap, item) {

        $scope.item = item;
        $scope.zoomWidth = 300;
        $scope.zoomHeight = 400;
        console.log(item);
        setTimeout(function(){
          $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();

        },3000);
        NgMap.getMap()
            .then(function (map) {
                map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
                google.maps.event.trigger(map, 'resize');
                var img = document.getElementById('img');

                if(img.naturalWidth < $scope.zoomHeight){
                  $scope.zoomHeight = img.naturalWidth;
                }

                if(img.naturalWidth < $scope.zoomWidth){
                  $scope.zoomWidth = img.naturalWidth;
                }
                console.log(img.clientWidth);
                console.log(img.clientHeight);

            });

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg';
            } else {
                return '../../styles/sass/theme/images/default.jpg';
            }
        };
        $scope.ok = function () {
            var product = {
                "idProduct": item.id,
                "productName": item.name,
                "price": item.price,
                "userId":1,
                "userName":'Eduard',
                "idUserOwner":item.idUser,
                "nameOwner":item.userName
            };
            $http({
                    method: 'POST',
                    url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewConversation.php',
                    data: product,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                    }
                })
                .then(function (response) {
                  console.log(response);
                    if (response.status === 200) {
                        $modalInstance.close();
                        $state.go('inbox',{'id':response.data[0].id});
                    }
                });
        };

        $scope.close = function () {
            $modalInstance.close('cancel');
        };
    }]);

'use strict';

angular.module('App.Controllers')
    .controller('nuevoController', ["$scope", "RESTFactory", "$http", "geolocation", "$state", function ($scope, RESTFactory, $http, geolocation, $state) {
        $scope.colors = $scope.tallas = $scope.marcas = $scope.prendas = $scope.images = [];
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
            if (count < 10) {
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

'use strict';

angular.module('App.Controllers')
    .controller('inboxController', ["$scope", "$http", "$interval", "$rootScope", "$state", function ($scope, $http, $interval, $rootScope, $state) {
        $scope.messages = $scope.conversations = [];
        $scope.lastId = 0;
        $scope.myMessage = {
            'text': ''
        };
        $scope.paramsId = $state.params.id;
        $scope.conversation = {};

        $http.get('http://www.eduardgomez.me/gangashunter_backend/getConversations.php?idUser=1')
            .then(function (response) {
                $scope.conversations = response.data;
            });

        $http.get('http://www.eduardgomez.me/gangashunter_backend/getConversation.php?id=' + $state.params.id)
            .then(function (response) {
                $scope.conversation = response.data[0];
                console.log(response.data[0]);

                $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=' + $state.params.id + '&message=' + $scope.lastId)
                    .then(function (response) {
                        $scope.messages = response.data;
                        $scope.lastId = $scope.messages[response.data.length - 1].id;
                    });

                $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
                    $interval.cancel(interval);
                });

                var interval = $interval(function () {
                    $http.get('http://www.eduardgomez.me/gangashunter_backend/getMessages.php?id=' + $state.params.id + '&message=' + $scope.lastId, {
                            ignoreLoadingBar: true
                        })
                        .then(function (response) {
                            if (response.data.length > 0) {
                                response.data.forEach(function (item) {
                                    $scope.messages.push(item);
                                    $scope.lastId = item.id;
                                });
                            }
                        });
                }, 5000);
                $interval.cancel(interval);
            });

        $scope.sendMessage = function () {
            if ($scope.myMessage.text.length > 0) {
                var data = {
                    "idConversation": $scope.conversation.id,
                    "idUser": 1,
                    "text": $scope.myMessage.text
                };

                console.log(data);

                $http({
                        method: 'POST',
                        url: 'http://www.eduardgomez.me/gangashunter_backend/insertNewMessage.php',
                        data: data,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'POST',
                            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 200) {
                            $scope.myMessage.text = '';
                        }
                    });
            }

        };
    }])

.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

'use strict';

angular.module('App.Controllers')
    .controller('loginController', ["$scope", "$timeout", function ($scope, $timeout) {
        $timeout(function () {
            $('.login')
                .slick({
                    dots: false,
                    infinite: true,
                    speed: 750,
                    fade: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    cssEase: 'linear',
                    initialSlide: Math.floor(Math.random() * 10) + 1
                });
        }, 500);
    }]);

'use strict';

angular.module('App.Controllers')
    .service('favoritosService', ["$http", "RESTFactory", "geolocation", function ($http, RESTFactory, geolocation) {
        this.loadFavorites = function (pag, filters) {
            return geolocation.getLocation()
                .then(function (data) {
                    return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFavoritos.php?id=1');
                });

        };
    }])
    .controller('favoritosController', ["$scope", "RESTFactory", "favoritosService", "angularGridInstance", "$timeout", "$filter", "$sce", "$modal", "ngGeodist", "cfpLoadingBar", "geolocation", function ($scope, RESTFactory, favoritosService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {

        $scope.translate = function (value) {
            return value + '€';
        };

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg'
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
        cfpLoadingBar.start();

        favoritosService.loadFavorites(0)
            .then(function (data) {
                $scope.pics = data.data;
                cfpLoadingBar.complete();
                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
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

                    });
                };
            });

    }]);

'use strict';

angular.module('App.Controllers')
    .service('myProductsService', ["$http", "RESTFactory", "geolocation", function ($http, RESTFactory, geolocation) {
        this.loadMyProducts = function (pag, filters) {
            return geolocation.getLocation()
                .then(function (data) {
                    return $http.get('http://www.eduardgomez.me/gangashunter_backend/getFavoritos.php?id=1');
                });

        };
    }])
    .controller('myProductsController', ["$scope", "RESTFactory", "myProductsService", "angularGridInstance", "$timeout", "$filter", "$sce", "$modal", "ngGeodist", "cfpLoadingBar", "geolocation", function ($scope, RESTFactory, myProductsService, angularGridInstance, $timeout, $filter, $sce, $modal, ngGeodist, cfpLoadingBar, geolocation) {

        $scope.translate = function (value) {
            return value + '€';
        };

        $scope.deliberatelyTrustDangerousSnippet = function (text) {
            return $sce.trustAsHtml(text);
        };

        $scope.getImage = function (product) {
            if (product.imgs.length >= 1) {
                //return 'http://www.eduardgomez.me/gangashunter_backend/uploads/' + product.imgs.split(',')[0];
                return '../../styles/sass/theme/images/default.jpg'
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
        cfpLoadingBar.start();

        myProductsService.loadMyProducts(0)
            .then(function (data) {
                $scope.pics = data.data;
                cfpLoadingBar.complete();
                $scope.moreInformation = function (pic) {
                    var modalInstance = $modal.open({
                        animation: false,
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

                    });
                };
            });

    }]);
