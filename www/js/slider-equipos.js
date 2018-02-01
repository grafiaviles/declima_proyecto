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


//SWIPER Slider Categoria Main
var swiper = new Swiper('.swiper-ofertas', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// SWIPER Slider Ficha Producto Swiper
var galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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

// SWIPER Slider Productos Relacionados
var swiper = new Swiper('.swiper-productos-relacionados', {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});

//SWIPER Preview Modal Lazy
var swiper = new Swiper('.swiper-lazy', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
