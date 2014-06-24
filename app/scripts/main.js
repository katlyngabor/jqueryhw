$(document).ready(function(){
	$('.lemon').mouseenter(function(){
			$(this).animate({
					height:'+=50'
			});
			console.log($(this).height());
			if ($(this).height()>200){
				$(this).html("I'm so tall!");
			};
	});
});









