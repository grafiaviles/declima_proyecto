$(window).scroll(function(){$(this).scrollTop()>100?$(".scroll-to-top").fadeIn():$(".scroll-to-top").fadeOut()}),$(".scroll-to-top").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},800)}),$(".button-collapse").sideNav({menuWidth:280}),$(".collapsible").collapsible(),$(".tooltipped").tooltip("remove"),$(".parallax").parallax(),$(document).ready(function(){$("ul.tabs").tabs({swipeable:!0})}),$(document).ready(function(){$("ul.tabs-ficha").tabs({swipeable:!0,responsiveThreshold:!0})}),$(".modal").modal(),$(function(){$(".anclas").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if((o=o.length&&o||$("[name="+this.hash.slice(1)+"]")).length){var e=o.offset().top;return $("html,body").animate({scrollTop:e},800),!1}}})}),$(".slider").slider(),$(".dropdown-button").dropdown({hover:!0,belowOrigin:!0});var altura=$(".efecto-menu").offset().top;$(window).on("scroll",function(){$(window).scrollTop()>altura?$(".efecto-menu").addClass("menu-fixed"):$(".efecto-menu").removeClass("menu-fixed")}),$("select").material_select();