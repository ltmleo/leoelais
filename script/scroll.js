$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return true;
      }
    }
  });
});

var lastScrollTop = 0;
$(document).scroll(function () {
  var breakEach = false;
  console.log($(this).scrollTop() > lastScrollTop)
  var upDirection = $(this).scrollTop() > lastScrollTop;
  lastScrollTop = $(this).scrollTop();

  $('section').each(function () {
    if (!breakEach && $(this).position().top < $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
      let nextSection = $(this).next().attr('id');
      console.log(upDirection)
      if (!upDirection) {
        nextSection = $(this).prev().attr('id');
      }
    console.log(nextSection)
    location.href = "#" + nextSection;
    breakEach = true;
  }
  });
});
