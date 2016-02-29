'use strict';

angular.module('App.Controllers')
    .controller('loginController', function ($scope, $timeout) {
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
    });
