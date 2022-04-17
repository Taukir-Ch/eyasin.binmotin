/*---------------------------------------------
Template name:  taukir-quickstart || html template
Version:        1.0
Author:  MD Taukir CH
Author url:     https://github.com/rajibmehedihasan

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]
----------------------------------------------*/

(function ($) {

  window.onscroll = function() {
    myFunction(); 
  
  };

var header = document.getElementById("myHeader");
var mheader = document.getElementById("mobile-hader-sticky-active");
var headebottomlogo = document.getElementById("headebottomlogo");

var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mheader.classList.add("sticky");
    headebottomlogo.classList.add("hactive");
    
  } else {
    header.classList.remove("sticky");
   mheader.classList.remove("sticky");
    headebottomlogo.classList.remove("hactive");

  }
}
    $(document).ready(function () {
      ma5menu({
          menu: '.site-menu',
          activeClass: 'active',
          footer: '#ma5menu-tools',
          position: 'left',
          closeOnBodyClick: true,
      });
  });
  
   
 
    $('.bannar-active-class').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow:4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<div class="arrow-left  bannar-arrow-p" > <i class="fas fa-long-arrow-alt-left"></i></div>',
      nextArrow: '<div class="arrow-right bannar-arrow-p " ><i class="fas fa-long-arrow-alt-right"></i> </div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });






if ($(window).width() <=1025 ) {
  $('.product-menu-wrapper').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true ,
    variableWidth: true,
   
  });
}

// bannar_js 
$('.bannar_active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

// product_section_activation_js
$('.catalog-product-active').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  mobileFirst: true ,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
   
    // instead of a settings object
  ]
});
	


  $('h2').click(function(){
      $('ul.active').removeClass('active');
      $('h2').removeClass('active');
      $(this).addClass('passive');
      $(this).parent().siblings().addClass('active');
      // $(this).parent().siblings().removeClass('active');
  });


  $('.card-dawer-active').click(function() {
    $('.header-card-dawer').toggleClass("colleped");
    
});







// account-js 
$('.my_account').click(function(event) {
  event.preventDefault();
  $(this).siblings().toggleClass("colleped_body");
});


jQuery( document ).ready( function( $ ) {
  $( '#sticky' ).stickable();
 
});

if(window.innerWidth <= 600) {
  $('[data-serialscrolling]').serialscrolling({

    // selector
    
    targetSelector: '[data-serialscrolling-target]',
    getTarget: function($element){
      const target = $element.attr('data-serialscrolling');
      return $('[data-serialscrolling-target="'+ target +'"]');
    },
    getTrigger: function($page, $stack){
      const target = $page.attr('data-serialscrolling-target');
      return $stack.filter('[data-serialscrolling="'+ target +'"]');
    },
    
    // duration of the animation in ms
    duration: 400,
    
    // easing function
    easing: 'easeInOutExpo',
    
    // top offset in px
    offsetTop: -110,
    
    // callback
    callback: false
    
    });
} else {
  $('[data-serialscrolling]').serialscrolling({

    // selector
    
    targetSelector: '[data-serialscrolling-target]',
    getTarget: function($element){
      const target = $element.attr('data-serialscrolling');
      return $('[data-serialscrolling-target="'+ target +'"]');
    },
    getTrigger: function($page, $stack){
      const target = $page.attr('data-serialscrolling-target');
      return $stack.filter('[data-serialscrolling="'+ target +'"]');
    },
    
    // duration of the animation in ms
    duration: 400,
    
    // easing function
    easing: 'easeInOutExpo',
    
    // top offset in px
    offsetTop: -170,
    
    // callback
    callback: false
    
    });
}


  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
          slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  




  })(jQuery);


