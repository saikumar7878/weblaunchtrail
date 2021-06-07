/*
 _____   _           _         _                        _
|_   _| | |         | |       | |                      | |
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

// HEADING
var tl = gsap.timeline(),

split = new SplitText("#quote", {type:"words,chars"}),

words = split.words; //an array of all the divs that wrap each character
chars = split.chars; //each letter
gsap.set("#quote", {perspective: 400});

tl.to(chars, {
  duration: 1.5,
  "--weight": "100",
  ease: "none",
	x:100,
  color: "hsl(+=0, +=70%, +=20%)",
	repeat: 1,
  stagger: {
    each: 0.4,
  }
})

tl.to(words[0], {
  duration: 1.5,
  "--weight": "300",
  ease: "none",
  color: "hsl(+=0, +=70%, +=20%)",
  stagger: {
    each: 0.4,
		repeat: 1,
  }
})
// wl to weblaunch transformation
$(function() {
  var text = $(".wl_head");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
		console.log("window_top_position: ",scroll);
    if (scroll >= 4800) {
      text.removeClass("hidden");
    }else {
      text.addClass("hidden");
    }

    if (scroll >= 8547) {
      text.removeClass("hidden_mobile");
    }else{
      text.addClass("hidden_mobile");
    }
  });
});

var fix_header = $(".fix_header");
$(window).scroll(function() {
	console.log("secret: ",$(window).scrollTop());
	var header_position = $(window).scrollTop();
	console.log("fixing: ",header_position);
  if (header_position > 647) {
    fix_header.addClass("fixing_items");
  } else {
    fix_header.removeClass("fixing_items");
		$(".navbar-collapse").removeClass("show");
		$("body").removeClass("offcanvas-active");
  }
});

var wl_process_heading = $(".wl_process_heading");
$(window).scroll(function() {
	console.log("wl_agency: ",$(window).scrollTop());
	var window_top = $(window).scrollTop();
	console.log("window_top: ",window_top);
  if (window_top > 3450) {
    wl_process_heading.addClass("line_cross");
  } else {
    wl_process_heading.removeClass("line_cross");
  }
});
