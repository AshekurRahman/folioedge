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
        $('.mainmenu-area .nav-row .menu-button .nav-action.toggle-menu').on('click', function () {
            $(this).find('span').toggleClass('fe-plusfe-dubbol-arrow-up');
            $(this).find('span').toggleClass('fe-dubbol-arrow-down');
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
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
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



        /*-- Line-Progress-Bar-Active --*/
        $(".bar_group").appear(function () {
            var value = $(this).find('.bar_group__bar').data('value');
            $(this).find('.b_tooltip span').animateNumber({
                number: value
            }, 1500);
        });

        // 
        var typed3 = new Typed('#typed3', {
            strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
            typeSpeed: 0,
            backSpeed: 0,
            smartBackspace: true, // this is a default
            loop: true
          });
            


    });


})(jQuery);