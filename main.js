$(document).ready(function(){
    $('.bxslider-four').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 10,
        nextText: '',
        prevText: '',
        nextSelector: '.four-conteiner-slyder__next',
        prevSelector: '.four-conteiner-slyder__prev',
        pager: false,
    });
    $('.portfolio-slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 6,
        slideWidth: 430,
        slideMargin: 0,
        pager: true,
        // ticker: true,
        // speed: 30000,
    });

    
    $('.block-namber__nam').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        });
        
    });
  });
