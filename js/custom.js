(function (jQuery) {
    
    "use strict";
    // Parallax Backgrounds
    // Menu Overlay
    jQuery('.toggle-icon').on('click',function(e){
        e.preventDefault();
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
            jQuery('.menu-overlay').removeClass('active');
            jQuery('body').removeClass('overflow-hidden');
        } else {
            jQuery(this).addClass('active');
            jQuery('.menu-overlay').addClass('active');
            jQuery('body').addClass('overflow-hidden');
        }
    });
    
    jQuery('.contact-link').on('click', function(e) {
        {
            jQuery(this).removeClass('active');
            jQuery('.menu-overlay').removeClass('active');
            jQuery('body').removeClass('overflow-hidden');
            jQuery('.toggle-icon').removeClass('active');
        }
    });
    
    
    // DropDown Menu
    jQuery('.inner-menu ul li').each(function(){
        var ths = jQuery(this);
        ths.hover(
            function() {
                ths.find('ul').stop().slideDown();
            }, function() {
                ths.find('ul').stop().slideUp();
            }
        );
    });
    // Site preloader -- also uncomment the div in the header and the css style for #preloader
    jQuery(window).load(function(){
        jQuery('#preloader').fadeOut(
            'slow',
            function(){
                jQuery(this).remove();
            });
    });
    // Animated Progress Bar
    jQuery('.progress-bars').waypoint(function() {
            jQuery('.progress').each(function(){
                jQuery(this).find('.progress-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },200);
            });},
        {
            offset: '100%',
            triggerOnce: true
        });
    // Isotope Gallery
    var jQuerycontainer = jQuery('.portfolioContainer');
    jQuerycontainer.imagesLoaded().progress( function() {
        jQuerycontainer.isotope({
            filter: '*',
            resizable: false,
            animationOptions: {
                duration: 1000,
                easing: 'linear',
                queue: false
            },
            //layoutMode: 'masonry',
            masonryHorizontal: {
                columnWidth: 0
            }
        });
    });
    jQuery('.portfolioFilter a').on('click',function(){
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    // WOW
    new WOW().init();
    // OnScreen Detect
    var jQueryappeared = jQuery('.detect');
    jQueryappeared.appear();
    jQuery(document.body).on('appear', '.detect', function(e, jQueryaffected) {
        // This code is executed for each appeared element
        jQueryaffected.each(function() {
            var numbr = jQuery(this).text();
            jQuery(this).removeClass('detect');
            jQuery(this)
                .prop('number', 0)
                .animateNumber(
                {
                    number: numbr
                },
                5000
            );
        })
    });
})(jQuery);


