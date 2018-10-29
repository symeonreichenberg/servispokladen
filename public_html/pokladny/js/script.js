(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function hideClanek1() {
    var x = document.getElementById('btn_clanek_1');
    x.style.display = "none";
}
function hideClanek2() {
    var x = document.getElementById('btn_clanek_2');
    x.style.display = "none";
}
function hideClanek3() {
    var x = document.getElementById('btn_clanek_3');
    x.style.display = "none";
}
function hideClanek4() {
    var x = document.getElementById('btn_clanek_4');
    x.style.display = "none";
}
//alternate row bg
var i = 0;
$(".child").each(function(i){
  if(i%2===0){
    $(this).addClass("child-even");
  }
  i++;
});
$(".grad").each(function(i){
  if(i%2===0){
    $(this).addClass("grad_gray");
  }
  i++;
});

function checkLength() {
    this.showing = new Array();
}
//hide long content
checkLength.prototype.check = function() {
  var that = this;
  $('.article').each(function (index) {
    var article = $(this);
    var theP = article.find('p');
    var theMore = article.find('.more');
    if (theP.width() > article.width()) {
      theMore.show();
      that.showing[index] = true;
    } else {
      if (!article.hasClass('active')) {
        theMore.hide();
        that.showing[index] = false;
      } else {
        that.showing[index] = false;
      }
    }
    theMore.text(that.showing[index] ? "...číst dál" : "");
  });
};

$(function () {
  var checker = new checkLength();
  checker.check();
  $('.more').each(function () {
    $(this).on('click', function (e) {
      $(this).closest('.article').toggleClass('active');
      checker.check();
    });
  });
  $(window).resize(function() {
    checker.check()
  });
});