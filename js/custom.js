
$(document).ready(function () {
    $("#our-work-slider").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 3,
            }
        }
    });

    $("#testimonial-slider").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        items: 1,
    });
});

