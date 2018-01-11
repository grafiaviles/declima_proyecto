//Scroll Top
$(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut()
    }),
    $(".scroll-to-top").click(function(e) {
        e.preventDefault(),
            $("html, body").animate({ scrollTop: 0 }, 800)
    });
//Menu Principal
$(".button-collapse").sideNav({
    menuWidth: 280
});
// Acordeon
$('.collapsible').collapsible();
// Toolstips
$('.tooltipped').tooltip('remove');
// Paralax
$('.parallax').parallax();
// Tabs Equipos Home slider
$(document).ready(function() {
    $('ul.tabs').tabs({
        swipeable: true
    });
});
// Tabs Ficha Producto Slider
$(document).ready(function() {
    $('ul.tabs-ficha').tabs({
        swipeable: true,
        responsiveThreshold: true
    });
});

//Modal buscador
$('.modal').modal();
// Navegacion Ancla
$(function() { $(".anclas").click(function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = $(this.hash); if ((e = e.length && e || $("[name=" + this.hash.slice(1) + "]")).length) { var a = e.offset().top; return $("html,body").animate({ scrollTop: a }, 800), !1 } } }) });

//Slider Home
$('.slider').slider();

$('.dropdown-button').dropdown({
    hover: true, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
});

//Efecto Menu
var altura = $('.efecto-menu').offset().top;

$(window).on('scroll', function() {
    if ($(window).scrollTop() > altura) {
        $('.efecto-menu').addClass('menu-fixed');
    } else {
        $('.efecto-menu').removeClass('menu-fixed');
    }
});

//Selectores
$('select').material_select();

//Media boxed
$('.materialboxed').materialbox();

//Scroll Aside
/* var $aside = $('#aside');
var $asideTop = $aside.offset().top;
var pegarAside = function() {
    var $scrollTop = $(window).scrollTop();
    if ($scrollTop >= $asideTop) {
        $aside.addClass('fixed-effect')
    } else {
        $aside.removeClass('fixed-effect')
    }
}
$(window).on('scroll', pegarAside); */

//Ver px del scroll en vivo
/* $(window).on('scroll', function() {
    var $scrollTop = $(window).scrollTop();
    $('nav').text('El scroll es ' + $scrollTop + 'px');
}); */