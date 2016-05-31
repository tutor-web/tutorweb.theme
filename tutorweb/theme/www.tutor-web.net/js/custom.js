    var nav = responsiveNav(".nav-collapse");
    
    // Responsive mobile menu
    $(function() {
        var pull = $('#pull');
    	    menu = $('nav ul');
		    menuHeight	= menu.height();

	    $(pull).on('click', function(e) {
	    	e.preventDefault();
	    	menu.slideToggle();
	    });

    	$(window).resize(function(){
         var w = $(window).width();
                if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
          }
    	});
    });
    
    
    
    // Toggle Read more link text
    $('.readmore').click(function(){
      $('#banner-text p').toggle();
    });
    
    // Read more link for devices with screen size under 700px
    var mql = window.matchMedia('only screen and (max-width: 700px)');

    mql.addListener(function(mql) {
        if (mql.matches) {
            $('#banner-text p').hide();
                } else {
            $('#banner-text p').show();
            document.getElementById("more").innerHTML = "Read more";
        }
    });
    
    $(".readmore").on("click", function() {
        var el = $(this);
        if (el.text() == el.data("text")) {
            el.text(el.data("text-original"));
        } else {
            el.data("text-original", el.text());
            el.text(el.data("text"));
        }
    });
    
     if (matchMedia('only screen and (max-width: 700px)').matches) {
        $('#banner-text p').hide();
    }

    // Enable ScrollSneak for all links within these id's
    ['vertical-menu', 'content-core', 'portal-breadcrumbs'].map(function (id) {
        var sneaky = new ScrollSneak(location.hostname),
            el = document.getElementById(id);
        if (el === null) return;

        Array.prototype.map.call(el.getElementsByTagName('a'), function (anchor) {
            anchor.onclick = sneaky.sneak;
        });
    });

jQuery(function($){
    var common_content_filter = '#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info';

    $('#banner-text a[href$="/register"]').prepOverlay({
        subtype: 'ajax',
        filter: common_content_filter,
        cssclass: 'overlay-register',
        formselector: 'form.kssattr-formname-register'
    });

    $('#banner-text a[href$="/login"]').prepOverlay({
        subtype: 'ajax',
        filter: common_content_filter,
        formselector: 'form#login_form',
        cssclass: 'overlay-login',
        noform: function() {
            if (location.href.search(/pwreset_finish$/) >= 0) {
                return 'redirect'
            } else {
                return 'reload'
            }
        },
        redirect: function() {
            var href = location.href;
            if (href.search(/pwreset_finish$/) >= 0) {
                return href.slice(0, href.length - 14) + 'logged_in'
            } else {
                return href
            }
        }
    });
});
