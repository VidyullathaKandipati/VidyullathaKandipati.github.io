$(document).ready(function(){

  // var controller = new ScrollMagic.Controller({
	// 		globalSceneOptions: {
	// 			triggerHook: 'onLeave'
	// 		}
	// });
  // var slides = document.querySelectorAll(".slide");
  // for (var i=0; i<slides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: slides[i]
	// 		})
	// 		.setPin(slides[i])
	// 		// .addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller);
	// }

  var controller2 = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
  });
  var secondSlides = document.querySelectorAll(".projects");
  // console.log(secondSlides);
  for (var i=0; i<secondSlides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: secondSlides[i]
			})
			.setPin(secondSlides[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller2);
	}

  $('.other').hide();
  var fixmeTop = $('.home').offset().top;       // get initial position of the element
  // console.log(fixmeTop);

  $(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
      // console.log(currentScroll, fixmeTop);
      $('.other').show();
      $('.home').hide();
    } else {                                   // apply position: static
      $('.other').hide();
      $('.home').show();
    }

  });

});
