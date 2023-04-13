; (function ($) {
    $(document).on('ready', function () {

                      /*Mobail-menu-active*/
                      $('.mainmenu-area .toggle-menu').on('click', function () {
                        $(this).find('span').toggleClass('fe-plus');
                        $(this).find('span').toggleClass('fe-minus');
                        $('.mainmenu-area .nav-row .manu-items').slideToggle();
                    });

                                    /* Sticky-Menu-JS */
                $(window).scroll(function () {
                    if($(window).scrollTop() > 50) {
                        $(".mainmenu-area").addClass('sticky');
                    } else {
                        $(".mainmenu-area").removeClass('sticky');
                    }
                });



        /*====== testimonial -slider ======*/
        var testimonial_sider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 30,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".testimonial-slider .navigation-control .next",
                prevEl: ".testimonial-slider .navigation-control .prev",
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
            },
        });




                /*====== Brand-logo-slider -slider ======*/
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
                        230: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                    },
                });


                        /*====== stadius-slider ======*/
        var stadius_slider = new Swiper(".stadius-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 25,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },

                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });





    });

})(jQuery);