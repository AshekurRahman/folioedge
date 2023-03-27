; (function ($) {
    $(document).on('ready', function () {



        /* Sticky-Menu-JS */
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
            }
        });
        /*mobile-menu-active*/
        $('.mainmenu-area .nav-row .menu-button .nav-action.toggle-menu').on('click', function () {
            $(this).find('span').toggleClass('fe-plus');
            $(this).find('span').toggleClass('fe-minus');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
        });
        /*====== news-Slider ======*/
        var news_Slider = new Swiper(".news-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#news-slider-control .navigation-control .next",
                prevEl: "#news-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#news-slider-control .pagination-control",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },

                1920: {
                    slidesPerView: 2,
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
                    slidesPerView: 4,
                },
            },
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
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });


        /*====== Feedback-Slider ======*/
        var Feedback_Slider = new Swiper(".feedback-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 100,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#feedback-slider-control .navigation-control .next",
                prevEl: "#feedback-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#feedback-slider-control .pagination-control",
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },

                1024: {
                    slidesPerView: 3,
                },

                1920: {
                    slidesPerView: 3,
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

        $(document.body).on('appear', '.bar_group', function (e, $affected) {
            var value = $(this).find('.bar_group__bar').data('value');
            $(this).find('.b_tooltip span').animateNumber({
                number: value
            }, 1000);
        });


    });

    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });


})(jQuery);