$(document).ready(function() {

	var multipleImages = $('.owl-carousel-1').find('img').length > 1 ? true : false;
	 		
	$('.owl-carousel-1').owlCarousel({
		items: 1,
		dots: multipleImages,
		nav: multipleImages,
		loop: multipleImages,
		autoplay: multipleImages,
		autoplaySpeed: multipleImages ? 1000 : 0
	});	

	$('.owl-carousel-1-stop').owlCarousel({
		items: 1,
		dots: multipleImages,
		nav: multipleImages,
		loop: false
	});
	
	$(".owl-carousel-6").owlCarousel({
		items: 6,
		loop: false,
		autoplay: true,
		dots: true,
		nav: true,
		navSpeed: true,
		autoplayHoverPause: true,//should be before autoplayTimeout
		//	autoplayTimeout: 1500,
	    autoplaySpeed: 1000,
	    
	    responsive: {
			0: {
				items: 1
			},
			319: {
				items: 2
			},
			480: {
				items: 4
			},
			769: {
				items: 4
			},
			1200: {
				items: 6,
				dots: false,
				nav: false,
				loop: false
			}
			
		}
	});
 
	$(".owl-carousel-custom").owlCarousel({
		items : 5,
		responsive: {
			0: {
				items: 3
			},
			320: {
				items: 5
			},
			567:{
				items: 7
			},
			768: {
				items: 9
			},
			1024: {
				items: 10,
				loop: true,
				nav: false
			}
		},
		loop: true,
		nav: true,
		navSpeed: true
	});
  
	$(".owl-carousel-4").owlCarousel({
		items : 4,
		responsive: {
			0: {
				items: 1
			},
			567:{
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 4,
				nav: false,
				loop: false
			}
		},
		nav: true,
		navSpeed: true,
		loop: true
	});
 
	$('.owl-carousel-3').owlCarousel({
		items: 3,
		nav: true,
		dots: false,
		loop: true,
		margin: 7,
		navSpeed: 100,
		responsive: {
			0: {
				items: 1
			},
			319: {
				items: 2
			},
			375: {
				items: 2
			},
			666:{
				items: 3,
				nav: false,
				loop: false
			},
			766: {
				items: 2
			},
			1023: {
				items: 3,
			 	autoWidth: true,
				nav: false,
				loop: false
			},
			1200: {
				items: 3,
				nav: false,
				loop: false
			}
		}
	});
   
	$(".owl-carousel-2").owlCarousel({
		items : 2,
		loop: true,
		nav: true,
		navSpeed: 200,
		responsive: {
			0:{
				items: 1
				
			},
			567:{
				items: 2
			}
		}
	});
}); 