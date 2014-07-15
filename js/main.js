/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams. 
Explore the code and see how I build the Apple shop navigation usign Greensock.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {
	
	var rightArrow = $('.navbar-arrow.right'),
		leftArrow = $('.navbar-arrow.left'),
		productList = $('.navbar ul'),
		visibleSlide = 'leftSlide';
	
	// Move left and right on click
	$(leftArrow).onload(function() {
		animateRight();
	});
	
	$(rightArrow).onload(function() {
		animateLeft();
	});
		
	function animateLeft(){
		var leftAnimation = new TimelineMax(),
			products = $($('.logo').get());
		leftAnimation
			//.to(productList, 0.6, {css:{marginLeft:'-638'}, ease:Power4.easeOut }, 0.02)
			.staggerTo(products, 0.6, {css:{x:'-638'}, ease:Power4.easeOut }, 0.02)
			.to(rightArrow, 1, {css:{marginLeft:'1000'}, ease:Quad.easeOut}, 0) //inserted at a time of 0 seconds
			.to(leftArrow, 1, {css:{marginLeft:'0'}, ease:Quad.easeOut }, 0); // inserted at a time of 0 seconds
		visibleSlide = 'rightSlide';
	}
	
	function animateRight(){
		var rightAnimation = new TimelineMax()
			products = $($('.logo').get().reverse());
		rightAnimation
			//.to(productList, 0.6, {css:{marginLeft:'0'}, ease:Power4.easeOut }, 0.02)
			.staggerTo(products, 0.6, {css:{x:'0'}, ease:Power4.easeOut}, 0.02)
			.to(rightArrow, 1, {css:{marginLeft:'948'}, ease:Quad.easeOut}, 0)
			.to(leftArrow, 1, {css:{marginLeft:'-70'}, ease:Quad.easeOut}, 0);
		visibleSlide = 'leftSlide';
	}
	
	// Move left and right on :focus (tab to link)	
	$('li:eq(6) a').focus(function() {
		if(visibleSlide == 'leftSlide'){
			animateLeft();
		}
	});
	
	$('li:eq(4) a').focus(function() {
		if (visibleSlide == 'rightSlide'){
			animateRight();	
		}		
	});
	
	// Keyboard navigation
	$(document.documentElement).keyup(function (event) {
		var direction = null;
		
		// handle cursor keys
		if (event.keyCode == 37) {
			// go left
			direction = 'left';
		} else if (event.keyCode == 39) {
			// go right
			direction = 'right';
		}
		
		if (direction != null) {
		  if([direction] == 'left'){
			  animateRight();
		  } else if([direction] == 'right') {
			  animateLeft();
		  }
		}
	});
	
});