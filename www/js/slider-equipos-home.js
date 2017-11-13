$('.slide-slick-equipos').slick({
    dots: true,
    slidesToShow: 4,
    arrows: false,
    centerPadding: '30px',
    autoplay: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 3,
            dots: true
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1,
            dots: true
        }
    }]
});