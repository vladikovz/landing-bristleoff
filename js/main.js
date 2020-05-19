$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
    })
    $(window).on('scroll', function () {
        if($(window).scrollTop()){
            $('nav').addClass('bg-menu-scroll');
        } else {
            $('nav').removeClass('bg-menu-scroll');
        }
    })
});