$(function(){
	
	// fetch the menu bar links
	var topMenu = $("#header"),
    topMenuHeight = topMenu.outerHeight()+250,
    // All list items
    menuItems = topMenu.find("a"),
	scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
	
	$(window).scroll(function() {
		
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;
		
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		// Set/remove active class
		menuItems
			.parent().removeClass("active")
			.end().filter("[href=#"+id+"]").parent().addClass("active");
		
		
		var scroll = $(window).scrollTop();
		if (scroll >= 500) {
			$(".navbar").addClass("dark");
		} else {
			$(".navbar").removeClass("dark");
		}
	});
	
	menuItems.click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'easeOutCubic');
	});
	
	$('#cl-slider').find('.scroll-showroom').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'easeOutCubic');
	});
});