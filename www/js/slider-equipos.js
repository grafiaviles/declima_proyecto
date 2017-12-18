// Slider Producto Home Slick
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

$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});


// Slider Ficha Producto Swiper
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;