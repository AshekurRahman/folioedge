; (function ($) {
    $(document).on('ready', function () {
        /*====== Project-Slider ======*/
        var Product_Slider = new Swiper(".project-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 35,
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
                type: 'bullets',
                renderBullet: function (i) {
                    return `<span class="dot swiper-pagination-bullet" ><svg> <circle style="animation-duration: ` + 3000 / 1000 + `s;" cx="11" cy="11" r="10"></circle></svg></span>`;
                }
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                768: {
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

        /*====== Feedback-Slider ======*/
        var Feedback_Slider = new Swiper(".feedback-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 100,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: "#feedback-slider-control .navigation-control .next",
                prevEl: "#feedback-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#feedback-slider-control .pagination-control",
                clickable: true,
                type: 'bullets',
                renderBullet: function (i) {
                    return `<span class="dot swiper-pagination-bullet" ><svg> <circle style="animation-duration: ` + 3000 / 1000 + `s;" cx="11" cy="11" r="10"></circle></svg></span>`;
                }
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },

                1920: {
                    slidesPerView: 1,
                },

            },
        });

        /*====== team_member-Slider ======*/
        var team_member_Slider = new Swiper(".team-member-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 35,
            slidesPerView: 1,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: "#team-member-slider-control .navigation-control .next",
                prevEl: "#team-member-slider-control .navigation-control .prev",
            },
            pagination: {
                el: "#team-member-slider-control .pagination-control",
                clickable: true,
                type: 'bullets',
                renderBullet: function (i) {
                    return `<span class="dot swiper-pagination-bullet" ><svg> <circle style="animation-duration: ` + 3000 / 1000 + `s;" cx="11" cy="11" r="10"></circle></svg></span>`;
                }
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
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
                type: 'bullets',
                renderBullet: function (i) {
                    return `<span class="dot swiper-pagination-bullet" ><svg> <circle style="animation-duration: ` + 3000 / 1000 + `s;" cx="11" cy="11" r="10"></circle></svg></span>`;
                }
            },
            breakpoints: {

                320: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
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

                1920: {
                    slidesPerView: 3,
                },

            },
        });

    });

    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });

})(jQuery);