//slick nav (menu)
jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});
jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow');
});

//filter widget flag toggle js
jQuery('.checkbox_item_wrap').on("click", function(){
	jQuery(this).parents('.filter_widget_tgl_wrap').find('.filter_widget_toggle').slideToggle(200);
});



// MMI
jQuery('.filter_widget_tgl_flag_wrap .checkbox_item_wrap_tgl label').click(function(){
	if( jQuery(this).parents('.form-group').hasClass('active_bg_color') ) {
		jQuery(this).parents('.form-group').removeClass('active_bg_color');
	} else {
		jQuery(this).parents('.form-group').addClass('active_bg_color');
	}
});

jQuery('.filter_widget_tgl_flag_wrap .checkbox_item_wrap_tgl .form-group').click(function(){
	if( jQuery(this).hasClass('active_bg_color') ) {
		jQuery(this).removeClass('active_previous');
	} else {
		jQuery(this).addClass('active_previous');
	}
});

jQuery(".countries_flag_wrap .stp_check_field").change(function() {
	var numberOfChecked = $(this).parents('.countries_flag_wrap').find('.stp_check_field:checked').length;
    if( numberOfChecked > 0 ) {
    	jQuery(this).parents('.filter_widget_tgl_flag_wrap').find('.checkbox_item_wrap_tgl .stp_check_field').prop("checked", true).parent().addClass('active_bg_color');
    }
});

jQuery(".filter_widget_tgl_flag_wrap .checkbox_item_wrap_tgl .stp_check_field").change(function() {
    if( ! this.checked ) {
    	jQuery(this).parents('.filter_widget_tgl_flag_wrap').find('.filter_widget_flag .stp_check_field').prop("checked", false ).parent().removeClass('active_bg_color');
    }
});

// MMI


jQuery('.face1 .checkbox_item_wrap_ja label').click(function(e){
	jQuery('.filter_widget.fl_w50').find('.form-group').removeClass('active_bg_color0');
	jQuery(this).parents('.filter_widget.fl_w50').find('.form-group').addClass('active_bg_color0');
});

jQuery('.face2 .tgl_radio label').click(function(e){
	jQuery('.filter_widget').find('.form-group').removeClass('active_bg_color');
	jQuery(this).parents('.filter_widget').find('.form-group').addClass('active_bg_color');
});



jQuery('.face2 .tgl_check label').click(function(e){
	jQuery(this).parents('.filter_widget').find('.form-group').toggleClass('check_tgl_fix');
	jQuery(this).parents('.filter_widget').find('.form-group').removeClass('active_bg_color');
});

jQuery('.submit_popup_area .checkbox_item_wrap label').click(function(e){
	jQuery(this).parents('.filter_widget').find('.form-group').toggleClass('check_tgl_fix');
	jQuery('.filter_widget').find('.form-group').removeClass('active_bg_color');
	jQuery(this).parents('.filter_widget').find('.form-group').removeClass('active_bg_color0');
});



jQuery('.checkbox_item_wrap').on("click", function(){
	jQuery(this).parents('.checkbox_item_wrap_tgl').next('.filter_widget_flag').slideToggle(200);
});
jQuery('.checkbox_item_wrap label').click(function(e){
	e.stopImmediatePropagation();
});


//countries list js
jQuery(".countries_listed_row").click(function(){
    jQuery(this).next('.countries_flag_wrap').slideToggle("slow");
    jQuery(this).toggleClass('active');
});

// result price toggle js
jQuery(".broker_result_price_box .broker_result_price_btn").click(function(){
	jQuery(this).parents('.brokers_suitable_row').find(".result_per_year_wrap").slideToggle();
	jQuery(this).toggleClass('active');
});

(function($){
    // marquee js
    if(matchMedia('only screen and (max-width: 991px)').matches) {
	    var $mwo = jQuery('.marquee-with-options');
	    jQuery('.marquee').marquee();
	    jQuery('.marquee-with-options').marquee({
	        speed: 50,
	        gap: 0,
	        delayBeforeStart: 0,
	        direction: 'left',
	        duplicated: false,
	        pauseOnHover: true
	    });

	    //pause and resume links
	    jQuery('.pause').click(function(e){
	        e.preventDefault();
	        $mwo.trigger('pause');
	    });

	    jQuery('.resume').click(function(e){
	        e.preventDefault();
	        $mwo.trigger('resume');
	    });

	    //toggle
	    jQuery('.toggle').hover(function(e){
	        $mwo.trigger('pause');
	        },function(){
	        $mwo.trigger('resume');
	    })
	    .click(function(e){
	        e.preventDefault();
	    })
	}

	//step flag show hide js 
	jQuery(".countries_flag_wrap").each(function(){
		jQuery(this).children(".countries_flag_item").slice(0, 5).show();
	});

	if( jQuery(".countries_flag_wrap .countries_flag_item").length > 5 ) {
	  jQuery(".view_more_flg").on('click', function (e) {
	    e.preventDefault();
	    if( jQuery(this).hasClass('active') ) {
	    	jQuery(this).parents(".countries_flag_wrap").find(".countries_flag_item").hide(0);
	      	jQuery(this).parents(".countries_flag_wrap").find(".countries_flag_item").slice(0, 5).show();
			jQuery(this).removeClass('active');
	    } else {
	    	jQuery(this).parents(".countries_flag_wrap").find(".countries_flag_item:hidden").show();
	      	jQuery(this).addClass('active');
	    }

	    if (jQuery(this).text() == "Bekijk meer") {
	        jQuery(this).text("Bekijk minder")
	    } else {
	        jQuery(this).text("Bekijk meer")
	    }
	  });
	} else {
		jQuery(".view_more_flg").hide(0);
	}

	jQuery('.result_step .lees_meer_btn').click(function () {
        jQuery(this).toggleClass("less_up");
        jQuery('.hide_txt').slideToggle();
        if (jQuery(this).text() == "Lees meer") {
            jQuery(this).text("Lees minder")
        } else {
            jQuery(this).text("Lees meer")
        }
    });
})(jQuery);

jQuery(window).scroll(function(){
	if (jQuery(window).scrollTop() >= 172) {
		jQuery('.header_fix_view').addClass('is_stuck_header');
	}
	else {
		jQuery('.header_fix_view').removeClass('is_stuck_header');
	}

	if (jQuery(window).scrollTop() >= 172) {
		jQuery('.subjects_fix_view').addClass('is_stuck_subjects');
	}
	else {
		jQuery('.subjects_fix_view').removeClass('is_stuck_subjects');
	}
});

jQuery(window).scroll(function(){
	if(matchMedia('only screen and (max-width: 991px)').matches) {
		if (jQuery(window).scrollTop() >= 700) {
		    jQuery('.footer-sticky').addClass('is_stuck');
			jQuery('.footer-sticky').removeClass('is_stuck2');
		}
		else {
		    jQuery('.footer-sticky').removeClass('is_stuck');
			jQuery('.footer-sticky').addClass('is_stuck2');
		}
	}
});

jQuery(function(){
	jQuery('.cta_btn,.progress_two_btn_holder a').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top
		}, 1500);
		return false;
	});
});


jQuery.fn.isInViewport = function() {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();

    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

jQuery(window).on('resize scroll', function() {
    if(jQuery('.sticky-footer-view').length > 0) {
        if (jQuery('.sticky-footer-view').isInViewport()) {
            jQuery('.footer-sticky').removeClass('is_stuck');
        } else {
            jQuery('.footer-sticky').addClass('is_stuck');
        }
    }
});

(function($){
	jQuery('.package_plan_carousel').owlCarousel({
		loop:false,
		margin: 20,
		items: 4,
		nav:false,
		dots:false,
		mouseDrag: false,
		touchDrag: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				margin: 0,
				mouseDrag: true,
				touchDrag: true,
				autoHeight: true,
				nav:true,
				dots:true,
			},
			992:{
				items:4,
				margin: 15,
			},
			1350:{
				items:4,
			},
		}
	});

	jQuery('.similar_brokers_carousel').owlCarousel({
		loop:false,
		margin: 20,
		items: 4,
		nav:false,
		dots:false,
		mouseDrag: false,
		touchDrag: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				margin: 0,
				mouseDrag: true,
				touchDrag: true,
				autoHeight: true,
				nav:true,
				dots:true,
			},
			992:{
				items:4,
				margin: 15,
			},
			1350:{
				items:4,
			},
		}
	});

	jQuery('.featured_market_holder').owlCarousel({
		loop:false,
		margin: 40,
		items: 3,
		nav:true,
		dots:false,
		mouseDrag: false,
		touchDrag: false,
		responsiveClass:true,
		responsive:{
			0:{
				loop: true,
				items:1,
				margin: 0,
				mouseDrag: true,
				touchDrag: true,
				autoHeight: true,
				nav:true,
				dots:true,
				stagePadding: 28,
			},
			992:{
				items:3,
				margin: 40,
			},
		}
	});
})(jQuery);

	//faq js
(function($){
	jQuery( ".toggle_view_bg" ).click(function(e) {
		if(jQuery(this).hasClass('active')) {
		} else {
			$( ".toggle_view_bg" ).each(function() {
				if(jQuery(this).hasClass('active')) {
					jQuery(this).toggleClass('active');
					jQuery(this).next('.show_details').slideToggle('hide');
				}
			});
		}
		jQuery(this).toggleClass('active');
		jQuery(this).next('.show_details').slideToggle('slow');
		e.preventDefault();
	});

	if(matchMedia('only screen and (max-width: 991px)').matches) {
		jQuery( ".mobile_toogle_item" ).click(function(e) {
			if(jQuery(this).hasClass('active')) {
			} else {
				$( ".mobile_toogle_item" ).each(function() {
					if(jQuery(this).hasClass('active')) {
						jQuery(this).toggleClass('active');
						jQuery(this).next('.tab_content').slideToggle('hide');
					}
				});
			}
			jQuery(this).toggleClass('active');
			jQuery(this).next('.tab_content').slideToggle('slow');
			e.preventDefault();
		});
	}


	var carousel = jQuery("#inner_right_row_1");
    carousel.owlCarousel({
        loop:false,
        margin: 0,
        items: 4,
        nav:true,
        mouseDrag: false,
        touchDrag: false,
        dots:false,
        responsiveClass:false,
    });

    var carousel_inner = jQuery("#inner_right_row_2");
    carousel_inner.owlCarousel({
        loop:false,
        margin: 0,
        items: 4,
        nav:true,
        mouseDrag: false,
        touchDrag: false,
        dots:false,
        responsiveClass:false,
    });
})(jQuery);

