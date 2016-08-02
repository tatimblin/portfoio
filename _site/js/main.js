$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);
    
        
    // make a variable to store the mouse pos.
	var mouseTopPerc = 0;
	// function to be used to retrieve variable
	function getMousePos() {
		return (mouseTopPerc * 400) + '100%';
	}
	// update variable on mouse move
	$("body").on("mousemove", function (e) {
		mouseTopPerc = e.clientY/$(this).innerHeight();
	});
    

	// loop through each element
	$('.entry-content_head').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9,
            reverse:false
		})
		.setClassToggle(this, 'fade-in') // add class
/*        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75C695'
        }) // requires plugin*/
        .addTo(controller);
    });
        
    // loop through each element
	$('.entry-content_img').each(function(){
        // build tween
        var tween = TweenMax.to(this.children[0], 0.5, {x: '-60%'});

        // build scene and supply getMousePos function as duration
        var scene = new ScrollMagic.Scene({
            triggerElement: this, 
            duration: getMousePos
        })
            .setTween(tween)
            /*.addIndicators()*/ // add indicators (requires plugin)
            .addTo(controller);

	});

});


















