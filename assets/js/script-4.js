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
                    },
                });


            $('[data-audio]').each(function(){
                var value = $(this).data('audio');                
                var title = $(this).data('title');
                if(value === ''){
                    return false;
                }   
                audioPlayer = new oyoPlayer();
                $(this).append(audioPlayer);
                audioPlayer.addToPlaylist(value, title);
                audioPlayer.setSourceIndex(1);
                // get the current audio
                audioPlayer.getCurrentTrack();

                // get all audio files
                audioPlayer.getSongs()

                // check states
                audioPlayer.state.active
                audioPlayer.state.playing
                audioPlayer.state.paused
            });


    });

})(jQuery);