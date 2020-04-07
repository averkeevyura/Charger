$(document).ready(function(){
    $('.happy-box').slick({
        arrows:true,
        dots:false,
        slidesToShow: 1
    });

    $('.header-slider').slick({
        arrows:true,
        dots:false,
        slidesToShow: 1
    });

    $('.header-slider') .on('beforeChange', function(event, slick, nextSlide, currentSlide){
      $("#number").text(currentSlide + 1);
    });

    $('.charger-box').customScrollbar();

    $('.header-menu-burger').click(function(event){
        $('.header-menu-burger,.menu').toggleClass('active');
    });
    
});