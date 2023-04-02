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
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 5,
                },
            },
        });


        /*====== Project-Slider ======*/
        var Product_Slider = new Swiper(".project-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 25,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#project-slider-control .navigation-control .next",
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
                1024: {
                    slidesPerView: 3,
                },
            },
        });





        /*====== Testimonial-Slider ======*/
        var Testimonial_Slider = new Swiper(".testimonial-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#testimonial-slider-control .navigation-control .next",
                prevEl: "#testimonial-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#testimonial-slider-control .pagination-control",
                clickable: true,
            },
        });


        /*====== news-Slider ======*/
        var news_Slider = new Swiper(".news-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 20,
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


    });


    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });


})(jQuery);