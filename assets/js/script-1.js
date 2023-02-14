; (function ($) {
    $(document).on('ready', function () {

        /*====== Project-Slider ======*/
        var Product_Slider = new Swiper(".Project-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 4,
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
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 3,
                },
            },
        });
    });
    /*====== Feedback-Slider ======*/
    var Feedback_Slider = new Swiper(".feedback-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 0,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: "#Feedback-slider-control .navigation-control .next",
            prevEl: "#Feedback-slider-control .navigation-control .prev",
        },
        pagination: {
            el: "#Feedback-slider-control .pagination-control",
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

        },
    });
    /*====== Project-Slider ======*/
    var Team_Member_Slider = new Swiper(".Team-Member-slider", {
        loop: true,
        speed: 800,
        spaceBetween: 0,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: "#Team-Member-slider-control .navigation-control .next",
            prevEl: "#Team-Member-slider-control .navigation-control .prev",
        },
        pagination: {
            el: "#Team-Member-slider-control .pagination-control",
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
        },
    });





})(jQuery);