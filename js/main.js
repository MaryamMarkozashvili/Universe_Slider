$(document).ready(function() {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        // loop: true,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: false,
            },
            800: {
                items: 1,
                margin: 0,
            },
            1200: {}
        }
    });
    /*keyboard navigation*/
    $(document.documentElement).keyup(function(event) {    
        if (event.keyCode == 37) { /*left key*/
            owl.trigger('prev.owl.carousel', [700]);
        } else if (event.keyCode == 39) { /*right key*/
            owl.trigger('next.owl.carousel', [700]);
        }
    });

});