(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

  // aos
  AOS.init({
    duration: 1000
  });

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:false
      }
    }
	});

	// cleaning slider
	$('.cleaning-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:5,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 3,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:3,
        nav:true
      },
      1000:{
        items:3,
        nav:true
      }
    }
	});

  	// owl carousel
	var major2Carousel = $('.js-carousel');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: false,
    autoHeight: true,
    items: 3,
    smartSpeed:200,
    // dots:true,

    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      },
      1000:{
        items:3,
      }
  	}
	});
	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: false,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
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
  var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: false,
    autoHeight: true,
    items: 3,
    dots:false,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:true
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function() {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

  var dateAndTime = function() {
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    $('#m_time').timepicker();
  };
  dateAndTime();

  if (window.innerWidth <= 967.98) {
    $('#category').addClass('flex-nowrap overflow__x__scroll');
  }else{
    $('#category').removeClass('flex-nowrap overflow__x__scroll');

  }
  var windowScroll = function() {

    $(window).scroll(function(){
      var $win = $(window);
      // if ($win.scrollTop() > 200){
      //   $('.js-site-header').addClass('d-none');
      // }else{
      //   $('.js-site-header').removeClass('scrolled');
      // }
    

      if ($win.scrollTop() > 500) {
        $('.js-site-header').addClass('d-none');
      }else{
        $('.js-site-header').removeClass('d-none');

      }
      if ($win.scrollTop() > 900) {
        $('.js-site-header').removeClass('d-none');
        $('.js-site-header').addClass('scrolled');
        $('.js-site-header .site-left').addClass('d-none');
        $('.js-site-header .site-right').addClass('d-none');
        $('.js-site-header .site-left2').removeClass('d-none');
        $('.js-site-header .site-right2').addClass('d-lg-block d-md-block');

        // if($win.pageYOffset>100){
        //   $('.js-site-header .site-right2').addClass('d-none');
        // }else{
        //   $('.js-site-header .site-right2').removeClass('d-none');

        // }
      } else {
        $('.js-site-header').removeClass('scrolled');
         $('.js-site-header .site-left').removeClass('d-none');
        $('.js-site-header .site-right').removeClass('d-none');
        $('.js-site-header .site-left2').addClass('d-none');
        $('.js-site-header .site-right2').removeClass('d-lg-block d-md-block');

      }

    });

  };
  windowScroll();


  var goToTop = function() {

    $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });
  
  };


})(jQuery);