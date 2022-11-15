$(document).ready(function () {

    // Owl-carousel

    $('.site-main .aboutme-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }

    })


    // sticky navigation menu

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    navbarFixed();

});