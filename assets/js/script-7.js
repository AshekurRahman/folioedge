; (function ($) {
    $(document).on('ready', function () {
        $('.circle-progress').each(function () {
            $(this).appear(function () {
                var color = $(this).find('.chart').data('color');
                var percent = $(this).find('.chart').data('percent');
                $(this).find('.chart').easyPieChart({
                    barColor: color,
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 3,
                    lineCap: "round",
                    size: 80,
                    animate: 1500
                });
                $('.chart-number').each(function () {
                    var $this = $(this);
                    if (!$this.data('animated')) {
                        $this.data('animated', true).animateNumber({
                            number: percent
                        }, 1500);
                    }
                });
            });
        });

        
        $('.filter-options').on('click', 'button', function () {
            $('.filter-options').find('button').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $('.work-items').isotope({ filter: filterValue });
        });


        /* Sticky-Menu-JS */
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
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
                    slidesPerView: 1,
                },
            },
        });


        /*====== Blog-slider ======*/
        var blog_slider = new Swiper(".blog-slider", {
            loop: true,
            speed: 800,
            spaceBetween: 30,
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
                    slidesPerView: 3,
                },
            },
        });





    });

    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });





})(jQuery);