$(document).ready(function(){
    $('.four-conteiner-slyder__block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.four-conteiner-slyder__next',
        prevArrow: '.four-conteiner-slyder__prev',
        infinite: true,
            responsive: [
                {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        
                    }
                    },
            ]


    });
    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true

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
