$('.carousel').slick({
    infinite: true, // Ensures looping
    slidesToShow: 3, // Shows 3 slides at a time
    slidesToScroll: 1, // Scrolls one slide at a time
    autoplay: true, // Auto slide
    autoplaySpeed: 2000, // 2 seconds per slide
    arrows: true, // Adds navigation arrows
    dots: true, // Adds dots for navigation
    responsive: [
        {
            breakpoint: 768, // On tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480, // On phones
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.owl-carousel').owlCarousel({
    loop: true, // Enables infinite looping
    margin: 10,
    nav: true, // Adds next/prev arrows
    autoplay: true, // Auto slide
    autoplayTimeout: 2000, // 2 seconds per slide
    responsive: {
        0: {
            items: 1 // 1 item per slide on smaller screens
        },
        600: {
            items: 2 // 2 items per slide on medium screens
        },
        1000: {
            items: 3 // 3 items per slide on larger screens
        }
    }
});
