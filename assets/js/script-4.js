; (function ($) {
    $(document).on('ready', function () {




        /*====== testimonial -slider ======*/
        var testimonial_sider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 30,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#Project-slider-control .navigation-control .next",
                prevEl: "#Project-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#Project-slider-control .pagination-control",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });




                /*====== payment-logo-slider -slider ======*/
                var logo_slider = new Swiper(".logo-slider", {
                    loop: true,
                    speed: 800,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    navigation: {
                        nextEl: "#Project-slider-control .navigation-control .next",
                        prevEl: "#Project-slider-control .navigation-control .prev",
                    },
                    pagination: {
                        el: "#Project-slider-control .pagination-control",
                        clickable: true,
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 6,
                        },
                    },
                });





    });


})(jQuery);