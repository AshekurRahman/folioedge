; (function ($) {
    $(document).on('ready', function () {
    
            /* Sticky-Menu-JS */
            $(window).scroll(function () {
                if($(window).scrollTop() > 400) {
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
     

        /*====== Project-Slider ======*/
        var Product_Slider = new Swiper(".project-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 35,
            slidesPerView: 4,
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
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 3,
                },
                1920: {
                    slidesPerView: 3,
                },
            },
        });
        /*====== Feedback-Slider ======*/
        var Feedback_Slider = new Swiper(".feedback-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 100,
            slidesPerView: 4,
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
                768: {
                    slidesPerView: 1,
                },
                1250: {
                    slidesPerView: 1,
                },

                1920: {
                    slidesPerView: 1,
                },

            },
        });



        /*====== -Slider ======*/
        var Feedback_Slider = new Swiper(".news-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 30,
        slidesPerView: 4,
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
            768: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 3,
            },

            1920: {
                slidesPerView: 3,
            },

        },
    });
    


    /*====== Project-Slider ======*/
    var team_member_Slider = new Swiper(".team-member-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 35,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: "#team-member-slider-control .navigation-control .next",
            prevEl: "#team-member-slider-control .navigation-control .prev",
        },
        pagination: {
            el: "#team-member-slider-control .pagination-control",
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1250: {
                slidesPerView: 4,
            },
            1920: {
                slidesPerView: 4,
            },
        },
    });


});
}) (jQuery);