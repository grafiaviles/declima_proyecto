var tiva_testimonials = [];

function equalHeights() {
	jQuery('.tiva-testimonials-slider').each(function(index) {
		var maxHeight = 0;
		jQuery(this).find('.equal-height').each(function(i) {
			var height = jQuery(this).height();
			if ( height > maxHeight ) {
				maxHeight = height;
			}
		});
		
		jQuery(this).find('.equal-height').css('height', maxHeight);
	});
}

// Create testimonials slider
function createTestimonials() {
	jQuery('.tiva-testimonials-slider').each(function(index) {
		var style = (typeof jQuery(this).attr('data-style') != "undefined") ? jQuery(this).attr('data-style') : '1';
		var style_image = (typeof jQuery(this).attr('data-image') != "undefined") ? jQuery(this).attr('data-image') : 'circle';
		
		jQuery(this).html('<div class="testimonials-list owl-carousel"></div>');
		for (var i = 0; i < tiva_testimonials.length; i++) {
			if (tiva_testimonials[i].image) {
				var testimonial_image = '<img class="' + style_image + '" src="' + tiva_testimonials[i].image + '" alt="' + tiva_testimonials[i].name + '" />';
			} else {
				var testimonial_image = '';
			}
			var testimonial_rating = '';
			if (tiva_testimonials[i].rating) {
				testimonial_rating += '<div class="testimonial-rating">';
				for (var j = 0; j < tiva_testimonials[i].rating; j++) {
					testimonial_rating += '<i class="fa fa-star"></i>';
				}
				testimonial_rating += '</div>';
			}
			if (style == 1) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item equal-height">'
																	+ '<div class="testimonial-image">' + testimonial_image + '</div>'
																	+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																	+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																	+ testimonial_rating
																	+ '<div class="testimonial-content">' + tiva_testimonials[i].content + '</div>'
																+ '</div>'
																);
			} else if (style == 2) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item tiva-tooltip style-2">'
																	+ '<div class="testimonial-content equal-height">' + tiva_testimonials[i].content + '</div>'
																	+ '<div class="testimonial-image">' + testimonial_image + '</div>'
																	+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																	+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																	+ testimonial_rating
																+ '</div>'
																);
			} else if (style == 3) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item tiva-tooltip style-3">'
																	+ '<div class="testimonial-content equal-height">' + tiva_testimonials[i].content + '</div>'
																	+ '<div class="testimonial-image cell-left">' + testimonial_image + '</div>'
																	+ '<div class="cell-right">'
																		+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																		+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																		+ testimonial_rating
																	+ '</div>'
																+ '</div>'
																);
			} else if (style == 4) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item tiva-tooltip style-4">'
																	+ '<div class="cell-left">'
																		+ '<div class="testimonial-image">' + testimonial_image + '</div>'
																		+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																		+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																		+ testimonial_rating
																	+ '</div>'
																	+ '<div class="cell-right">'
																		+ '<div class="testimonial-content">' + tiva_testimonials[i].content + '</div>'
																	+ '</div>'
																+ '</div>'
																);
			} else if (style == 5) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item equal-height style-5">'
																	+ '<div class="testimonial-image cell-left">' + testimonial_image + '</div>'
																	+ '<div class="cell-right">'
																		+ '<div class="testimonial-content quote"><i class="fa fa-quote-left"></i>' + tiva_testimonials[i].content + '</div>'
																		+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																		+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																		+ testimonial_rating
																	+ '</div>'
																+ '</div>'
																);
			} else if (style == 6) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item equal-height style-6">'
																	+ '<div class="testimonial-image cell-left">' + testimonial_image + '</div>'
																	+ '<div class="cell-right">'
																		+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																		+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																		+ testimonial_rating
																	+ '</div>'
																	+ '<div class="testimonial-content quote"><i class="fa fa-quote-left"></i>' + tiva_testimonials[i].content + '</div>'
																+ '</div>'
																);
			} else if (style == 7) {
				jQuery(this).find('.testimonials-list').append(	'<div class="testimonial-item equal-height style-7">'
																	+ '<div class="testimonial-content quote"><i class="fa fa-quote-left"></i>' + tiva_testimonials[i].content + '</div>'
																	+ '<div class="testimonial-bottom">'
																		+ '<div class="testimonial-image">' + testimonial_image + '</div>'
																		+ '<div class="cell-right">'
																			+ '<div class="testimonial-name">' + tiva_testimonials[i].name + '</div>'
																			+ '<div class="testimonial-job">' + tiva_testimonials[i].job + '</div>'
																			+ testimonial_rating
																		+ '</div>'
																	+ '</div>'
																	+ '<div style="clear:both"></div>'
																+ '</div>'
																);
			}
			
		}
		
		// Carousel
		var items = (typeof jQuery(this).attr('data-items') != "undefined") ? parseInt(jQuery(this).attr('data-items')) : 3;
		var autoplay = (typeof jQuery(this).attr('data-autoplay') != "undefined") ? jQuery(this).attr('data-autoplay') : false;
		var nav = (typeof jQuery(this).attr('data-nav') != "undefined") ? JSON.parse(jQuery(this).attr('data-nav')) : true;
		var effect = (typeof jQuery(this).attr('data-effect') != "undefined") ? jQuery(this).attr('data-effect') : '';
		jQuery(this).find('.testimonials-list').owlCarousel({
			margin:30,
			loop:true,
			dots:nav,
			dotsEach:1,
			autoplay:autoplay,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			animateOut:effect,
			responsive:{
				0:{
					items:1
				},
				768:{
					items:items
				}
			}
		});
		
		// Custom color
		if (typeof jQuery(this).attr('data-color') != "undefined") {
			var color = jQuery.parseJSON(jQuery(this).attr('data-color'));
			if (typeof color.name != "undefined") { jQuery(this).find('.testimonial-name').css('color', color.name); }
			if (typeof color.job != "undefined") { jQuery(this).find('.testimonial-job').css('color', color.job); }
			if (typeof color.rating != "undefined") { jQuery(this).find('.testimonial-rating').css('color', color.rating); }
			if (typeof color.content != "undefined") { jQuery(this).find('.testimonial-content').css('color', color.content); }
			if (typeof color.image != "undefined") { jQuery(this).find('.testimonial-image img').css('border', '5px solid ' + color.image); }
			if (typeof color.line != "undefined") { jQuery(this).find('.testimonial-item.style-7 .cell-right').css('border-top', '2px solid ' + color.line); }
			if (typeof color.background != "undefined") { jQuery(this).find('.testimonial-item').addClass('background'); jQuery(this).find('.testimonial-item').css('background', color.background); }
		}
	});
	
	// Equal height
	setTimeout(equalHeights, 100);
}

jQuery(document).ready(function(){
	// Get testimonials from json file or ajax php
	var source = (typeof jQuery('.tiva-testimonials-slider').attr('data-source') != "undefined") ? jQuery('.tiva-testimonials-slider').attr('data-source') : 'json';
	if (source == 'json') { // Get testimonials from json file : testimonials/testimonials.json
		jQuery.getJSON("testimonials/testimonials.json", function(data) {
			for (var i = 0; i < data.items.length; i++) {
				tiva_testimonials.push(data.items[i]);
			}
			
			// Create testimonials slider
			createTestimonials();
		});
	} else { // Get testimonials from php file via ajax
		jQuery.ajax({
			url: 'testimonials/testimonials.php',
			dataType: 'json',
			data: '',
			beforeSend : function(){
				jQuery('.tiva-testimonials-slider').html('<div class="loading"><img src="assets/images/loading.gif" /></div>');
			},
			success: function(data) {
				for (var i = 0; i < data.length; i++) {
					tiva_testimonials.push(data[i]);
				}
				
				// Create testimonials slider
				createTestimonials();
			}
		});
	}
});