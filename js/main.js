(function ($) {
  "use strict";

  $(".site-menu-toggle").click(function () {
    var $this = $(this);
    if ($("body").hasClass("menu-open")) {
      $this.removeClass("open");
      $(".js-site-navbar").fadeOut(400);
      $("body").removeClass("menu-open");
    } else {
      $this.addClass("open");
      $(".js-site-navbar").fadeIn(400);
      $("body").addClass("menu-open");
    }
  });

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // aos
  AOS.init({
    duration: 1000,
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });

  // cleaning slider
  $(".cleaning-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 5,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: false,
    items: 3,
    autoheight: true,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  // owl carousel
  var major2Carousel = $(".js-carousel");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: false,
    autoHeight: true,
    items: 3,
    smartSpeed: 200,
    // dots:true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: false,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  // owl carousel
  // var major2Carousel = $('.js-carousel-2');
  // major2Carousel.owlCarousel({
  //   loop:false,
  //   autoplay: false,
  //   stagePadding: 0,
  //   margin: 0,
  //   dots:false,
  //   // animateOut: 'fadeOut',
  //   // animateIn: 'fadeIn',
  //   autoplayHoverPause: false,
  //   autoHeight: true,
  //   items: 4,
  //   responsive:{
  //     0:{
  //       items:1,

  //     },
  //     600:{
  //       items:2,

  //     },
  //     1000:{
  //       items:5,

  //     }
  // 	}
  // });
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: false,
    autoHeight: true,
    items: 3,
    dots: false,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });
  };
  siteStellar();

  var smoothScroll = function () {
    var $root = $("html, body");

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
      return false;
    });
  };
  smoothScroll();

  var dateAndTime = function () {
    $("#m_date").datepicker({
      format: "m/d/yyyy",
      autoclose: true,
    });
    $("#checkin_date, #checkout_date").datepicker({
      format: "d MM, yyyy",
      autoclose: true,
    });
    $("#m_time").timepicker();
  };
  dateAndTime();

  if (window.innerWidth <= 967.98) {
    $("#category").addClass("flex-nowrap overflow__x__scroll");
  } else {
    $("#category").removeClass("flex-nowrap overflow__x__scroll");
  }
  var windowScroll = function () {
    $(window).scroll(function () {
      var $win = $(window);
      // if ($win.scrollTop() > 200){
      //   $('.js-site-header').addClass('d-none');
      // }else{
      //   $('.js-site-header').removeClass('scrolled');
      // }

      if ($win.scrollTop() > 500) {
        $(".js-site-header").addClass("d-none");
      } else {
        $(".js-site-header").removeClass("d-none");
      }
      if ($win.scrollTop() > 900) {
        $(".js-site-header").removeClass("d-none");
        $(".js-site-header").addClass("scrolled");
        $(".js-site-header .site-left").addClass("d-none");
        $(".js-site-header .site-right").addClass("d-none");
        $(".js-site-header .site-left2").removeClass("d-none");
        $(".js-site-header .site-right2").addClass("d-lg-block d-md-block");

        // if($win.pageYOffset>100){
        //   $('.js-site-header .site-right2').addClass('d-none');
        // }else{
        //   $('.js-site-header .site-right2').removeClass('d-none');

        // }
      } else {
        $(".js-site-header").removeClass("scrolled");
        $(".js-site-header .site-left").removeClass("d-none");
        $(".js-site-header .site-right").removeClass("d-none");
        $(".js-site-header .site-left2").addClass("d-none");
        $(".js-site-header .site-right2").removeClass("d-lg-block d-md-block");
      }
    });
  };
  windowScroll();

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };
})(jQuery);

// Text write js
const texts = [
  'Search for "Teacher"',
  'Search for "Domestic Help"',
  'Search for "Rent"',
  'Search for "Cleaning Service"',
];
const input = document.querySelector("#searchbox");
const animationWorker = function (input, texts) {
  this.input = input;
  this.defaultPlaceholder = this.input.getAttribute("placeholder");
  this.texts = texts;
  this.curTextNum = 0;
  this.curPlaceholder = "";
  this.blinkCounter = 0;
  this.animationFrameId = 0;
  this.animationActive = false;
  this.input.setAttribute("placeholder", this.curPlaceholder);

  this.switch = (timeout) => {
    this.input.classList.add("imitatefocus");
    setTimeout(() => {
      this.input.classList.remove("imitatefocus");
      if (this.curTextNum == 0)
        this.input.setAttribute("placeholder", this.defaultPlaceholder);
      else this.input.setAttribute("placeholder", this.curPlaceholder);

      setTimeout(() => {
        this.input.setAttribute("placeholder", this.curPlaceholder);
        if (this.animationActive)
          this.animationFrameId = window.requestAnimationFrame(this.animate);
      }, timeout);
    }, timeout);
  };

  this.animate = () => {
    if (!this.animationActive) return;
    let curPlaceholderFullText = this.texts[this.curTextNum];
    let timeout = 500;
    if (
      this.curPlaceholder == curPlaceholderFullText + "|" &&
      this.blinkCounter == 3
    ) {
      this.blinkCounter = 0;
      this.curTextNum =
        this.curTextNum >= this.texts.length - 1 ? 0 : this.curTextNum + 1;
      this.curPlaceholder = "|";
      this.switch(2000);
      return;
    } else if (
      this.curPlaceholder == curPlaceholderFullText + "|" &&
      this.blinkCounter < 3
    ) {
      this.curPlaceholder = curPlaceholderFullText;
      this.blinkCounter++;
    } else if (
      this.curPlaceholder == curPlaceholderFullText &&
      this.blinkCounter < 3
    ) {
      this.curPlaceholder = this.curPlaceholder + "|";
    } else {
      this.curPlaceholder =
        curPlaceholderFullText
          .split("")
          .slice(0, this.curPlaceholder.length + 1)
          .join("") + "|";
      timeout = 100;
    }
    this.input.setAttribute("placeholder", this.curPlaceholder);
    setTimeout(() => {
      if (this.animationActive)
        this.animationFrameId = window.requestAnimationFrame(this.animate);
    }, timeout);
  };

  this.stop = () => {
    this.animationActive = false;
    window.cancelAnimationFrame(this.animationFrameId);
  };

  this.start = () => {
    this.animationActive = true;
    this.animationFrameId = window.requestAnimationFrame(this.animate);
    return this;
  };
};

document.addEventListener("DOMContentLoaded", () => {
  let aw = new animationWorker(input, texts).start();
  input.addEventListener("focus", (e) => aw.stop());
  input.addEventListener("blur", (e) => {
    aw = new animationWorker(input, texts);
    if (e.target.value == "") setTimeout(aw.start, 1000);
  });
});

function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

var menu_bar = document.querySelector(".sc-bottom-bar");
var menu_item = document.querySelectorAll(".sc-menu-item");
var menu_indicator = document.querySelector(".sc-nav-indicator");
var menu_current_item = document.querySelector(".sc-current");
var menu_position;

menu_position = menu_current_item.offsetLeft - 16;
menu_indicator.style.left = menu_position + "px";
menu_bar.style.backgroundPosition = menu_position - 8 + "px";
menu_item.forEach(function (select_menu_item) {
  select_menu_item.addEventListener("click", function (e) {
    e.preventDefault();
    menu_position = this.offsetLeft - 16;
    menu_indicator.style.left = menu_position + "px";
    menu_bar.style.backgroundPosition = menu_position - 8 + "px";
    [...select_menu_item.parentElement.children].forEach((sibling) => {
      sibling.classList.remove("sc-current");
    });
    select_menu_item.classList.add("sc-current");
  });
});

gotoHome = () => {
  window.location.href = "index.html";
};
gotoCustomer = () => {
  window.location.href = "about.html";
};
gotoWorker = () => {
  window.location.href = "details.html";
};
gotoContact = () => {
  window.location.href = "contact.html";
};
