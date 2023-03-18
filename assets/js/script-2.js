; (function ($) {
    $(document).on('ready', function () {



                /* Sticky-Menu-JS */
                $(window).scroll(function () {
                    if($(window).scrollTop() > 50) {
                        $(".mainmenu-area").addClass('sticky');
                    } else {
                        $(".mainmenu-area").removeClass('sticky');
                    }
                });

                
              /*Mobail-menu-active*/
        $('.mainmenu-area .toggle-menu').on('click', function () {
            $(this).find('span').toggleClass('fe-plus');
            $(this).find('span').toggleClass('fe-minus');
            $('.mainmenu-area .nav-row .manu-items').slideToggle();
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
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
            },
        });


        /*====== Members-slider -slider ======*/
        var members_slider = new Swiper(".members-slider", {
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
                    spaceBetween: 20,
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
                        320: {
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
                        1200: {
                            slidesPerView: 6,
                        },
                    },
                });



        /*-- Line-Progress-Bar-Active --*/
        $(".bar_group").appear(function () {
            var value = $(this).find('.bar_group__bar').data('value');
            $(this).find('.b_tooltip span').animateNumber({
                number: value
            }, 1500);
        });



        /*-- Line-Progress-Bar-Active --*/
        $(".bar_group").appear(function () {
            var value = $(this).find('.bar_group__bar').data('value');
            $(this).find('.b_tooltip span').animateNumber({
                number: value
            }, 1500);
        });




          



    });

    $(window).on("load", function(){
        $(".loader-bg").fadeOut();
    });

})(jQuery);