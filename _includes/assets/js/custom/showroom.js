$(function(){
	$('.car-container, .priseks').click(function(event){
		event.preventDefault();
		var objModel=$('#modal-car-1').find('.modal-content');
		$.get($(this).data('url'), function(data){
			objModel.html(data);
			$("#cl-slider-modal").owlCarousel({
				navigation : true, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true,
				navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
			});
			$('#modal-car-1').modal('toggle');
		});
		
		/*
		$('#modal-'+$(this).data("id")).modal('toggle');
		
		$("#cl-slider-modal").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			navigationText: ["<span><i class='ion-chevron-left'></span>", "<span><i class='ion-chevron-right'></span>"]
		});
		*/
	})
})