//mouseenter

$(document).ready(function(){
		$('.mouseenter-practice').mouseenter(function(){
			$(this).animate({
					height:'+=50'
			});
			console.log($(this).height());
			if ($(this).height()>=25){
				$(this).html("Again, please");
			};

			if ($(this).height()>=50){
				$(this).html("I'm growing!");
			};
			if ($(this).height()>=100){
				$(this).html("That's enough!");
			};

			if ($(this).height()>=150){
				$(this).html("Well keep trying, I suppose!");
			};

		});
});


$('.mouseenter-practice').mouseleave(function(){
if ($('.mouseenter-practice').height()>=200){
				$(this).mouseleave(function(){
							$(this).animate().html("That's much better.")
							$(this).animate({
							height:'100'
					});
				});
			};
		});
		



$(document).keydown(function(){
	$('.keydown-practice').html("Haha! That tickles, silly!")
});

$('.click-practice').on('click',function(){
	alert("Well this is weird and wonderful!")
});	


$('header').one('click', function(){
	$(this).animate().html('Welcome to a Wonderland of jQuery')
	$(this).addClass('header-font-change');
	$(this).animate({
		height:"+=300px"	
	});
});


$("input").keyup(function(){
  $("input").css("background-color","black");
  $("input").css("color","white");
  $(".keydown-practice").css("background-color","pink")
});

$("input").keydown(function(){
	$("input").css("background-color","pink");
	$(".keydown-practice").css("background-color","black")
});


$('.replace-practice').mouseenter(function(){
	$(this).animate().html('You sure?<br>It might be scary!');
	$('.replace-practice').on('click',function(){
	$('<div class="img-container"><img src="images/heart-hi.png"><br>A heart! How cute!</div>').replaceAll('.replace-practice');
 });
});

$(".do-not-press").click(function(){
  $("input").toggle();
  $(".keydown-practice").toggle();
  $(".replace-practice").toggle();
  $("img").toggle();
  $(".mouseenter-practice").toggle();
  $(".click-practice").toggle();
  $(".img-container").toggle();
  $('header').toggle();


});













