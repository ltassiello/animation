
$(document).ready(function(){

	


	//using timeline
	var tl= new TimelineLite();

	tl.from(".logo", 1, { rotation:360, opacity: 0, ease:Back.easeOut}, "start")
 
});

     $('#inf_option__287').onClick(function(){
        $('#trees:hidden').fadeIn();


});

	//tl.pause();
	//tl.resume();
	//tl.restart();
	//tl.reverse("end");
	//tl.play();






});

$(document).ready(function(){

	var box = $(".square-1");



	TweenLite.to(box, 1.5, { left:"800px"});

	//TweenLite.to(box, 1.5, { left:"800px", ease:Power2.easeInOut });


	//TweenLite.to(box, .5, { height:"300px", width:"500px" , ease:Bounce.easeOut });






	//This is the js for onClick.html



	$("#button").click(function(){

		TweenLite.to("#flyout", 0.25, { scaleX: 1, scaleY: 1, y: 0, x: 0, ease: Expo.easeOut });
        TweenLite.to("#flyout", 0.25, { opacity: 1 });
	});


	$("#buttonClose").click(function(){

		 TweenLite.to("#flyout", 0.5, { scaleX: 0, scaleY: 0, y: -85, x: -115, ease: Expo.easeOut });
         TweenLite.to("#flyout", 0.5, { opacity: 0 });

	});



	
	//sequenced code w/o timeline


	
/*
	TweenLite.from("#logo img", .5, { rotation:360, position:"absolute", left: "-50px", opacity: 0});
	TweenLite.to(".logoText", .5, { opacity: 1, delay:0.2});
	TweenMax.staggerFrom("#icons img", .5, { scale: 0, autoAlpha:0, delay:1.0}, 0.5);
	TweenLite.to(".timeline #container img", .5, { opacity: 1, delay:2.5}); 

*/
	

	


	//using timeline
	var tl= new TimelineLite();

	tl.from(".logo", 1, { rotation:360, opacity: 0, ease:Back.easeOut}, "start")
	.to(".logoText", .3, { opacity: 1})
	.staggerFrom("#icons img", .4, { scale: 0, autoAlpha:0}, 0.2)
	.to(".timeline #container img", .5, { opacity: 1},"end", "+=0.0" );


	//tl.pause();
	//tl.resume();
	//tl.restart();
	//tl.reverse("end");
	//tl.play();






});