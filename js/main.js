// greetings
$(function () {
  var greetings = [
    'Hello there!',
    'Its nice to see you here!',
    'Hi!',
    'What’s up?',
    'How’s your day?',
    'It’s been a while!',
    'Long time no see!',
    'Pleased to meet you!',
    'It’s nice to meet you!',
    'How do you do?',
    'Yo!',
    'Howdy!',
    'Whazzup?',
    'Sup?',
    'G’day mate!',
    'Hiya!',
    'Look what the cat dragged in!',
    'What’s kickin’, little chicken?',
    'Hello, sunshine!',
    'Hey, howdy, hi!',
    'Howdy, partner!',
    'Peek-a-boo!',
    'Howdy-doody!',
    'I come in peace!',
    'Ahoy, matey!',
    'What’s crackin’?',
    'At least, we meet for the first time for the last time!',
    'Hello, who’s there, I’m talking.',
    'You know who this is.',
    'Ghostbusters, whatya want?',
    'Here’s Johnny!',
    'Oh, yoooouhoooo!',
  ];

  var greet = Math.floor(Math.random() * (greetings.length));

  $('.greetings').prepend(greetings[greet] + '<br><br>');
});

// document ready
$(document).ready(function() {

  'use strict';
  
  // smooth scrolling
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // navigation toggle
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
      // $('.back-to-top').fadeIn('slow');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
      // $('.back-to-top').fadeOut('slow');
    }
  });

  // responsive menu
  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // typedjs
  $(function() {
    $(".typed").typed({
      strings: [
        "I'm Eagan Charles Martin.", 
        "I'm an application developer.", 
        "I love photography.",
        "I enjoy playing games.",
      ],
      typeSpeed: 100,
      loop: true,
    });
  });

  // glitch
  $(function() {
    $(".glitch-img").mgGlitch({
      destroy: false,
      glitch: true,
      scale: false,
      blend: true,
      blendModeType: 'hue',
      glitch1TimeMin: 200, 
      glitch1TimeMax: 400,
      glitch2TimeMin: 100,
      glitch2TimeMax: 100,
      zIndexStart: 0, 
    });
  });

  // counter
  $('.counter').counterUp({
		delay: 15,
		time: 2000
  });
  
  // back to top
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // skills radial
  $(function() {
    $(".radial-progress").each(function(){
      var $this = $(this),
        progPercent = $this.data('prog-percent');
        
      var bar = new ProgressBar.Circle(this, {
        color: '#aaa',
        strokeWidth: 3,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333333', width: 3 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
      
      $(this).waypoint(function(){
         bar.animate(progPercent);  
      },{offset: "90%"})
      
    });
  });
});