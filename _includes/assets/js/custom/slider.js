$(document).ready(function() {
 
  $("#cl-slider").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"],
      autoPlay: 5000,
      transitionStyle: 'fadeUp',
      lazyLoad: true
  });
 
});