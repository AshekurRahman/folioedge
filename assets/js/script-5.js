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
        /*====== news-Slider ======*/
        var news_Slider = new Swiper(".news-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 30,
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
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
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
                320: {
                    slidesPerView: 2,
                },
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
            spaceBetween: 30,
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
                984: {
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



        $('.bar_group').each(function () {
            var value = $(this).find('.bar_group__bar').data('value');
            $(this).appear(function () {
                $('.b_tooltip span').each(function () {
                    var $this = $(this);
                    if (!$this.data('animated')) {
                        $this.data('animated', true).animateNumber({
                            number: value
                        }, 1500);
                    }
                });
            });
        });


    });

    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });


})(jQuery);