//Scroll Top
$(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut()
    }),
    $(".scroll-to-top").click(function(e) {
        e.preventDefault(),
            $("html, body").animate({ scrollTop: 0 }, 800)
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
// Navegacion Ancla
$(function() { $(".anclas").click(function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = $(this.hash); if ((e = e.length && e || $("[name=" + this.hash.slice(1) + "]")).length) { var a = e.offset().top; return $("html,body").animate({ scrollTop: a }, 800), !1 } } }) });