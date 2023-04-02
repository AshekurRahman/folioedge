;(function($){
    $(document).on('ready', function(){
        $('.ic-bar').append('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 464.205 464.205" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M435.192 406.18H29.013C12.989 406.18 0 393.19 0 377.167s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013zM435.192 261.115H29.013C12.989 261.115 0 248.126 0 232.103s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012zM435.192 116.051H29.013C12.989 116.051 0 103.062 0 87.038s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="currentColor" data-original="currentColor" class=""></path></g></svg>');

        /* Sticky-Menu-JS */
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $(".mainmenu-area").addClass('sticky');
            } else {
                $(".mainmenu-area").removeClass('sticky');
            }
        });

        $('.mainmenu-area .nav-action.toggle-menu').on('click', function(){
            $(this).toggleClass('active');
            $('.mainmenu-area .nav-row .menu-items').slideToggle();
        });
        
        /*===== SCROLL REVEAL ANIMATION =====*/
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`.anim_top`, {
            origin: 'top',
            interval: 100,
        });
        sr.reveal(`.anim_bottom`, {
            origin: 'bottom',
            interval: 100,
        });
        sr.reveal(`.anim_left`, {
            origin: 'left',
        });
        sr.reveal(`.anim_right`, {
            origin: 'right',
            interval: 100,
        });









    });



    
    $(window).on("load", function () {
        $(".loader-bg").fadeOut();
    });
}(jQuery));