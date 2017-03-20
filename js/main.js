// var lastMouseTime = 0;
$(document).ready( function(){

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

  // var controller2 = new ScrollMagic.Controller({
  //     globalSceneOptions: {
  //       triggerHook: 'onLeave'
  //     }
  // });
  // var secondSlides = document.querySelectorAll(".projects");
  // // console.log(secondSlides);
  // for (var i=0; i<secondSlides.length; i++) {
	// 		new ScrollMagic.Scene({
	// 				triggerElement: secondSlides[i]
	// 		})
	// 		.setPin(secondSlides[i])
	// 		// .addIndicators() // add indicators (requires plugin)
	// 		.addTo(controller2);
	// }

  var wh = window.innerHeight / 2;
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  /* Showing the scroll me button animations */
  $('.arrow').show();

  /* Hiding the second menu and showing it after the scroll down to second page */
  $('.other').hide();
  var fixmeTop = $('.home').offset().top;       // get initial position of the element
  // console.log(fixmeTop);

  $(window).scroll( function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop + (wh/2)) {           // apply position: fixed if you
      // console.log(currentScroll, fixmeTop);
      // $('.other').show();
      $('.other').show().addClass('fadeIn');
      $('.home').hide();
    } else {                                   // apply position: static
      $('.other').hide();
      $('.home').show().addClass('fadeIn');
    }

  });

  /* Animation of the internal link navigation */
  $(document).on('click', '.int-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  });

  /* Setting animation upon hover of the homepage menu*/
  $('.menu-open-button').hover(function(){
    $('.menu').addClass('tada').one(animationEnd, function(){
      $('.menu').removeClass('tada');
    });
  });

  /* Sliding effects on skills */
  var skillsSection = $("#page-skills").offset().top;
  var aboveSkillsSection = $("#page-about").offset().top;
  var belowSkillsSection = $("#page-work").offset().top;
  var contactSection = $("#page-contact").offset().top;
  // $(window).bind("scroll", function() {
  $(window).scroll(function() {

    //Hiding the scroll me button animations
    if ($(this).scrollTop() >= (wh-100)){
      $('.arrow').hide();
    }
    console.log("Srcoll", belowSkillsSection, wh*2);
    if ($(this).scrollTop() > belowSkillsSection ){
      $('.black-arrow').hide();
    }
    if ($(this).scrollTop() <= belowSkillsSection ){
      $('.black-arrow').show();
    }

    if ( $(this).scrollTop() >= (skillsSection - wh) ) {
        // $('.box1').addClass('slideInLeft').one(animationEnd, function(){
        //   $('.box1').removeClass('slideInLeft');
        // });
        // $('.box2').addClass('slideInUp').one(animationEnd, function(){
        //   $('.box2').removeClass('slideInUp');
        // });
        // $('.box3').addClass('slideInRight').one(animationEnd, function(){
        //   $('.box3').removeClass('slideInRight');
        // });
        $('.box1').addClass('slideInLeft');
        $('.box2').addClass('slideInUp');
        $('.box3').addClass('slideInRight');
    }else{
      $('.box1').removeClass('slideInLeft');
      $('.box2').removeClass('slideInUp');
      $('.box3').removeClass('slideInRight');
    }

    if ($(this).scrollTop() >= (skillsSection + wh)){
      $('.box1').addClass('slideOutLeft');
      $('.box2').addClass('slideOutUp');
      $('.box3').addClass('slideOutRight');
    }else{
      $('.box1').removeClass('slideOutLeft');
      $('.box2').removeClass('slideOutUp');
      $('.box3').removeClass('slideOutRight');
    }

    /* Animating THank you page */
    //Hiding the scroll me button animations
    console.log($(this).scrollTop(), contactSection);
    if ($(this).scrollTop() >= (contactSection - wh/2)){
      // $('.thank').addClass('bounceInUp');
    }else{
      // $('.thank').removeClass('bounceInUp');
    }

  });
  $(window).scroll();

  /* Cofee cup */
//   var s = Snap.select('.coffee');
// var paths = s.selectAll('.smoke');
//
// for (var i = 0; i < paths.length; i++) {
//
//   var path = paths[i];
//   	var length = path.getTotalLength();
//
//   path.attr({
// 		    "stroke-dasharray": length + " " + length,
//     "stroke-dashoffset": length
//   });
// 		  animateSmoke(path,length);
// }
//
//
// function animateSmoke(path,length) {
//   path.animate({
//       "stroke-dashoffset": '-' + length
//     }, 1000, mina.linear,
//     function() {
//       path.attr({
//         "stroke-dashoffset": length
//       });
//       setInterval(function() {
//   	      animateSmoke(path,length);
//       },500);
//     }
//   );
// }

});
