
// Read more link for devices with screen size under 700px

var mql = window.matchMedia('only screen and (max-width: 700px)');

mql.addListener(function(mql) {
    if (mql.matches) {
        $(".readmore").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text"));
  }
});

$('#banner-text p').hide();

// Toggle Read more link text
$('.readmore').click(function(){
      $('#banner-text p').toggle();
  });
    } else {
        $('#banner-text p').show();
    }
});


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
        

