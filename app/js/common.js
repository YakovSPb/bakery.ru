$(function() {


//SLIDER//
  $(".next").click(function() {
    $('.slider2').trigger('next.owl.carousel');
  })
  $(".prev").click(function() {
    $('.slider2').trigger('prev.owl.carousel');
  });


$('.slider2').owlCarousel({
    loop : true,
    margin:10,
    items: 3,
    smartSpeed: 700,
    itemClass: "slide-wrap",
    nav: true,
    navText: [''],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
        },
        480:{
            items:3,
            nav:true
        },
     }
});


$('.on1').click(function(){
    
  $('.food-image img').removeClass('on');


  $('.food-image img:nth-child(1)').addClass('on'); 

  $('.food-text').removeClass('ton');
  $('.food-text:nth-child(1)').addClass('ton');
  $('.food-image img:nth-child(1)').css('opacity', '0'); 
  $('.food-image img:nth-child(1)').fadeTo( 100, 1, "linear" );

});


$('.on2').click(function(){
    
  $('.food-image img').removeClass('on');

  $('.food-image img:nth-child(2)').addClass('on');
  $('.food-image img:nth-child(2)').css('opacity', '0'); 
  $('.food-image img:nth-child(2)').fadeTo( 100, 1, "linear" );

  $('.food-text').removeClass('ton');
  $('.food-text:nth-child(2)').addClass('ton');

});


$('.on3').click(function(){
    
  $('.food-image img').removeClass('on');

  $('.food-image img:nth-child(3)').addClass('on');
  $('.food-text').removeClass('ton');
  $('.food-text:nth-child(3)').addClass('ton');
  $('.food-image img:nth-child(3)').css('opacity', '0'); 
  $('.food-image img:nth-child(3)').fadeTo( 100, 1, "linear" );

});


$('.on4').click(function(){
    
  $('.food-image img').removeClass('on');

  $('.food-image img:nth-child(4)').addClass('on');
  $('.food-text').removeClass('ton');
  $('.food-text:nth-child(4)').addClass('ton');
  $('.food-image img:nth-child(4)').css('opacity', '0'); 
  $('.food-image img:nth-child(4)').fadeTo( 100, 1, "linear" );

});



//MENU//

var api = $("#my-menu").data("mmenu");
api.bind('open:finish', function () {
    $('.hamburger').toggleClass('is-active');
}).bind('close:finish', function () {
    $('.hamburger').removeClass('is-active');
}); 
});

$(function(){
    if ($(window).width() < 500){
        // Подключаем стиль для мобильных
        $("head").append($("<link rel='stylesheet' href='css/styleMob.css' type='text/css' media='screen' />"));
    }
    else{
        // Подключаем стиль для остальных
        $("head").append($("<link rel='stylesheet' href='css/style.css' type='text/css' media='screen' />"));
    }
});



$(window).resize(function() {
    if(document.documentElement.clientWidth < 1200) {
        $('#my-menu').mmenu({
            extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
            navbar: {
                title: '<div class="logo">Gustoso</div>'
            }
        });
    }
});

