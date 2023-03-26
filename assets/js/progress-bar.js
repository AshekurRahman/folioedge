(function ($) {
    var selectors = [];
  
    var checkBinded = false;
    var checkLock = false;
    var defaults = {
      interval: 250,
      force_process: false
    };
    var $window = $(window);
  
    var $priorAppeared = [];
  
    function isAppeared() {
      return $(this).is(':appeared');
    }
  
    function isNotTriggered() {
      return !$(this).data('_appear_triggered');
    }
  
    function process() {
      checkLock = false;
  
      for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
        var $appeared = selectors[index].filter(isAppeared);
  
        $appeared
          .filter(isNotTriggered)
          .data('_appear_triggered', true)
          .trigger('appear', [$appeared]);
  
        if ($priorAppeared[index]) {
          var $disappeared = $priorAppeared[index].not($appeared);
          $disappeared
            .data('_appear_triggered', false)
            .trigger('disappear', [$disappeared]);
        }
        $priorAppeared[index] = $appeared;
      }
    }
  
    function addSelector(selector) {
      selectors.push(selector);
      $priorAppeared.push();
    }
  
    // ":appeared" custom filter
    $.expr.pseudos.appeared = $.expr.createPseudo(function (_arg) {
      return function (element) {
        var $element = $(element);
  
        if (!$element.is(':visible')) {
          return false;
        }
  
        var windowLeft = $window.scrollLeft();
        var windowTop = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;
  
        if (top + $element.height() >= windowTop &&
            top - ($element.data('appear-top-offset') || 0) <= windowTop + $window.height() &&
            left + $element.width() >= windowLeft &&
            left - ($element.data('appear-left-offset') || 0) <= windowLeft + $window.width()) {
          return true;
        }
        return false;
      };
    });
  
    $.fn.extend({
      // watching for element's appearance in browser viewport
      appear: function (selector, options) {
        $.appear(this, options);
        return this;
      }
    });
  
    $.extend({
      appear: function (selector, options) {
        var opts = $.extend({}, defaults, options || {});
  
        if (!checkBinded) {
          var onCheck = function () {
            if (checkLock) {
              return;
            }
            checkLock = true;
  
            setTimeout(process, opts.interval);
          };
  
          $(window).scroll(onCheck).resize(onCheck);
          checkBinded = true;
        }
  
        if (opts.force_process) {
          setTimeout(process, opts.interval);
        }
  
        addSelector(selector);
      },
      // force elements's appearance check
      force_appear: function () {
        if (checkBinded) {
          process();
          return true;
        }
        return false;
      }
    });
  }(function () {
    if (typeof module !== 'undefined') {
      // Node
      return require('jquery');
    }
    return jQuery;
  }()));

/*
 jQuery Progress bar
*/

function bar_group() { group_ident = 1, $(".bar_group").each(function () { $(this).addClass("group_ident-" + group_ident), $(this).data("gid", group_ident), group_ident++ }) } function get_max() { $(".bar_group").each(function () { var a = []; $(this).children().each(function () { a.push($(this).attr("data-value")) }), max_arr["group_ident-" + $(this).data("gid")] = a, void 0 !== $(this).attr("data-max") ? $(this).data("bg_max", $(this).attr("data-max")) : $(this).data("bg_max", Math.max.apply(null, a)) }) } function data_labels() { $(".bar_group__bar").each(function () { void 0 !== $(this).attr("data-label") && $('<p class="b_label">' + $(this).attr("data-label") + "</p>").insertBefore($(this)) }) } function show_values() { $(".bar_group__bar").each(function () { "true" == $(this).attr("data-show-values") && ($(this).css("margin-bottom", "0px"), void 0 !== $(this).attr("data-unit") ? ($(this).append('<p class="bar_label_min">0 ' + $(this).attr("data-unit") + "</p>"), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + " " + $(this).attr("data-unit") + "</p>")) : ($(this).append('<p class="bar_label_min">0</p>'), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + "</p>"))) }) } function show_tooltips() { $(".bar_group__bar").each(function () { "true" == $(this).attr("data-tooltip") && ($(this).css("margin-bottom", "0px"), $(this).append('<div class="b_tooltip"><span>' + $(this).attr("data-value") + '</span><div class="b_tooltip--tri"></div></div>')) }) } function in_view(a) { var t = $(a), i = $(window), s = i.scrollTop(), r = s + i.height(), n = t.offset().top, o = n + t.height(); r > o - 45 && t.css("width", t.attr("data-value") / t.parent().data("bg_max") * 100 + "%") } function bars() { bar_group(), get_max(), data_labels(), show_tooltips(), show_values() } max_arr = {}, $(".bar_group__bar").each(function () { in_view($(this)) }), $(window).scroll(function () { $(".bar_group__bar").each(function () { in_view($(this)) }) }), bars();
$(".bar_group__bar").each(function () {
    var bar_color = $(this).attr("data-color");
    $(this).css('background-color', bar_color);
});
