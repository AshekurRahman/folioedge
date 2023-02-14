/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!function(a){function h(b){return a(b).filter(function(){return a(this).is(":appeared")})}function i(){d=!1;for(var a=0,c=b.length;a<c;a++){var e=h(b[a]);if(e.trigger("appear",[e]),g[a]){var f=g[a].not(e);f.trigger("disappear",[f])}g[a]=e}}function j(a){b.push(a),g.push()}var b=[],c=!1,d=!1,e={interval:250,force_process:!1},f=a(window),g=[];a.expr[":"].appeared=function(b){var c=a(b);if(!c.is(":visible"))return!1;var d=f.scrollLeft(),e=f.scrollTop(),g=c.offset(),h=g.left,i=g.top;return i+c.height()>=e&&i-(c.data("appear-top-offset")||0)<=e+f.height()&&h+c.width()>=d&&h-(c.data("appear-left-offset")||0)<=d+f.width()},a.fn.extend({appear:function(b){var f=a.extend({},e,b||{}),g=this.selector||this;if(!c){var h=function(){d||(d=!0,setTimeout(i,f.interval))};a(window).scroll(h).resize(h),c=!0}return f.force_process&&setTimeout(i,f.interval),j(g),a(g)}}),a.extend({force_appear:function(){return!!c&&(i(),!0)}})}(function(){return"undefined"!=typeof module?require("jquery"):jQuery}());




/*
 jQuery Progress bar
*/

function bar_group() { group_ident = 1, $(".bar_group").each(function () { $(this).addClass("group_ident-" + group_ident), $(this).data("gid", group_ident), group_ident++ }) } function get_max() { $(".bar_group").each(function () { var a = []; $(this).children().each(function () { a.push($(this).attr("data-value")) }), max_arr["group_ident-" + $(this).data("gid")] = a, void 0 !== $(this).attr("data-max") ? $(this).data("bg_max", $(this).attr("data-max")) : $(this).data("bg_max", Math.max.apply(null, a)) }) } function data_labels() { $(".bar_group__bar").each(function () { void 0 !== $(this).attr("data-label") && $('<p class="b_label">' + $(this).attr("data-label") + "</p>").insertBefore($(this)) }) } function show_values() { $(".bar_group__bar").each(function () { "true" == $(this).attr("data-show-values") && ($(this).css("margin-bottom", "0px"), void 0 !== $(this).attr("data-unit") ? ($(this).append('<p class="bar_label_min">0 ' + $(this).attr("data-unit") + "</p>"), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + " " + $(this).attr("data-unit") + "</p>")) : ($(this).append('<p class="bar_label_min">0</p>'), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + "</p>"))) }) } function show_tooltips() { $(".bar_group__bar").each(function () { "true" == $(this).attr("data-tooltip") && ($(this).css("margin-bottom", "0px"), $(this).append('<div class="b_tooltip"><span>' + $(this).attr("data-value") + '</span><div class="b_tooltip--tri"></div></div>')) }) } function in_view(a) { var t = $(a), i = $(window), s = i.scrollTop(), r = s + i.height(), n = t.offset().top, o = n + t.height(); r > o - 45 && t.css("width", t.attr("data-value") / t.parent().data("bg_max") * 100 + "%") } function bars() { bar_group(), get_max(), data_labels(), show_tooltips(), show_values() } max_arr = {}, $(".bar_group__bar").each(function () { in_view($(this)) }), $(window).scroll(function () { $(".bar_group__bar").each(function () { in_view($(this)) }) }), bars();
$(".bar_group__bar").each(function () {
    var bar_color = $(this).attr("data-color");
    $(this).css('background-color', bar_color);
});
