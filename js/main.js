$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: false,
    })
    $(window).on('scroll', function () {
        if($(window).scrollTop()){
            $('nav').addClass('bg-menu-scroll');
        } else {
            $('nav').removeClass('bg-menu-scroll');
        }
    })

    $('.haircut-button').on('click', function () {
        if($('.portfolio-gallery__haircut').hasClass("portfolio-gallery__hidden")){
            $('.portfolio-gallery__haircut').removeClass("portfolio-gallery__hidden");
            $('.portfolio-gallery__beard').addClass("portfolio-gallery__hidden");
        }else{
            $('.portfolio-gallery__beard').addClass("portfolio-gallery__hidden");
        }
    })

    $('.beard-button').on('click', function () {
        if($('.portfolio-gallery__beard').hasClass("portfolio-gallery__hidden")){
            $('.portfolio-gallery__beard').removeClass("portfolio-gallery__hidden");
            $('.portfolio-gallery__haircut').addClass("portfolio-gallery__hidden");
        }else{
            $('.portfolio-gallery__haircut').addClass("portfolio-gallery__hidden");
        }
    })
    $('.all-work-button').on('click', function () {
            $('.portfolio-gallery__beard').removeClass("portfolio-gallery__hidden");
            $('.portfolio-gallery__haircut').removeClass("portfolio-gallery__hidden");
    })
});