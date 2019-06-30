function initMap(){
  var opt = {
      center: {lat: 46.459737, lng: 30.751730},
      zoom: 15
  }
  var map = new google.maps.Map(document.getElementById("map"), opt);
}

(function($) {
  $('.js-nav-menu-toggle').on('click', function() {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
  });
  
  $('html').on('click', function(e) {
    if(!$(e.target).closest('.js-nav-menu').length &&
      ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
        $('.js-nav-menu').removeClass('navigation-menu--open');
    }
  });
})(jQuery);