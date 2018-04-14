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
    hover: false, // Activate on hover
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

//Click Categorias main
var $botones = $('#botones');
$botones.on('click', 'a', function() {
    $(this).addClass('active-filtro');
    $(this).siblings().removeClass('active-filtro');
});

//Efecto Fixed Boton Comprar
var $comprar = $('#btn-fixed-comprar');
var $comprarTop = $comprar.offset().top;
var fixedComprar = function() {
    var $scrollTop = $(window).scrollTop();
    if ($scrollTop >= $comprarTop) {
        $comprar.addClass('fixed-effect')
    } else {
        $comprar.removeClass('fixed-effect')
    }
}
$(window).on('scroll', fixedComprar);

//Ver px del scroll en vivo
/* $(window).on('scroll', function() {
    var $scrollTop = $(window).scrollTop();
    $('nav').text('El scroll es ' + $scrollTop + 'px');
}); */


//Fecha de Nacimiento
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    container: undefined // ex. 'body' will append picker to body
});


$(document).ready(function() {
    $('.scrollspy').scrollSpy();
});