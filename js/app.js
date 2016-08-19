$(function(){
	$('#menu').slicknav();
});

	    $(document).ready(function(){
	    	var parameters = {
				dots: false,
				autoplay: true,
				autoPlayTimer: 3000,
				infinite: true,
				speed: 500,
				cssEase: 'linear',
				variableWidth: true,
				swipe: true,
				mobileFirst: true,
				lazyLoad: 'ondemand',
			}

	      	$('.fade').slick(parameters);
	      	
	    });
	    function showMenu() {
	      		document.getElementById("mobile").classList.toggle("hidden");
	      	}
	    $("body").click(function(event){
	    	var menu = $("#mobile");
	    	if (event.target.id !=="menubtn" && !$('#mobile').has(event.target).length){
	    		if (!menu.hasClass("hidden")){
	    			menu.addClass("hidden")
	    		}
	    	}
	    })

	    
