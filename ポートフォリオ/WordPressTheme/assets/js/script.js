"use strict";

jQuery(function ($) {
  var topBtn = $('.page-top');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  $(function () {
    $('.js-hamburger').on('click', function () {
      $('.js-hamburger').toggleClass('is-open');
      $('.js-drawer-menu').toggleClass('is-open');
      $('a[href^="#"]').on('click', function () {
        $('.js-hamburger').click();
      });
    });
  }());
  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
});
var stroke;
stroke = new Vivus('mask', {
  start: 'manual',
  type: 'scenario-sync',
  duration: 10,
  forceRender: false,
  animTimingFunction: Vivus.EASE
}, function () {
  $("#mask").attr("class", "done");
});
$(window).on('load', function () {
  $("#splash").delay(2000).fadeOut('slow');
  $("#splash_logo").delay(2000).fadeOut('slow');
  stroke.play();
});
AOS.init();