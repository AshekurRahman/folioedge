$.fn.appear = function(callback) {
    var element = this;
    var once = true;
  
    $(window).on('scroll', function() {
      var windowTop = $(this).scrollTop();
      var windowHeight = $(this).height();
      var elementTop = $(element).offset().top;
      var elementHeight = $(element).height();
  
      if (elementTop < (windowTop + windowHeight) && (elementTop + elementHeight) > windowTop) {
        if (once) {
          callback.call(element);
          once = false;
        }
      } else {
        once = true;
      }
    });
  };