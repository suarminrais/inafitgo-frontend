window.onscroll = function () {
  myFunction()
};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(".mobile-menu").click(function () {
  $('.menus nav').slideDown();
});

$(".menu-close").click(function () {
  $('.menus nav').slideUp();
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$.fn.parallax = function (resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function (e) {
  if ($(window).width() > 1023) {
    $(".phone-container").parallax(60, e);
    $(".shape-banner").parallax(-60, e);
    $(".parallax-1").parallax(-30, e);
    $(".parallax-2").parallax(30, e);
  }
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.article-title');
    links.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('.accordion-container'), false);
});

AOS.init({
  easing: 'ease-in-quad',
  duration: 700,
});

jQuery(function () {
  var $els = $('div[id^=footbit]'),
    i = 0,
    len = $els.length;

  if ($(window).width() < 768) {
    $els.slice(1).hide();
    setInterval(function () {
      $els.eq(i).fadeOut(function () {
        i = (i + 1) % len
        $els.eq(i).fadeIn();
      })
    }, 4000)
  }
})

function managerInvest() {
  var elements = jQuery(".invest-manager a");
  var index = 0;
  if ($(window).width() >= 768) {
    var showNextFive = function (index) {
      if (index >= elements.length) {
        index = 0;
      }
      elements.hide().slice(index, index + 5).fadeToggle(1000);
      setTimeout(function () {
        showNextFive(index + 5)
      }, 5000);
    }
    showNextFive(0);
  } else {
    var showNextThree = function (index) {
      if (index >= elements.length) {
        index = 0;
      }
      elements.hide().slice(index, index + 3).fadeToggle(800);
      setTimeout(function () {
        showNextThree(index + 3)
      }, 5000);
    }
    showNextThree(0);
  }
}
managerInvest();