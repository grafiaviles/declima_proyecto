$(".slide-slick-equipos").slick({dots:!0,slidesToShow:4,arrows:!1,centerPadding:"30px",autoplay:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"30px",slidesToShow:3,dots:!0}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"30px",slidesToShow:1,dots:!0}}]}),$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!1,adaptiveHeight:!0,infinite:!1,useTransform:!0,speed:400,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)"});var swiper=new Swiper(".swiper-ofertas",{spaceBetween:30,pagination:{el:".swiper-pagination-1"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2500,disableOnInteraction:!1}}),galleryTop=new Swiper(".gallery-top",{effect:"fade",centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-1"}}),galleryThumbs=new Swiper(".gallery-thumbs",{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0});galleryTop.controller.control=galleryThumbs,galleryThumbs.controller.control=galleryTop;var swiper=new Swiper(".swiper-productos-relacionados",{slidesPerView:4,spaceBetween:30,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:0}}}),swiper=new Swiper(".swiper-preview",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});