// logo page
function pageRedirect() {
  window.location.href = "./logo.html";
}
//navbar js starts
  $(function () {
      'use strict'

      $("[data-trigger]").on("click", function(){
         var trigger_id =  $(this).attr('data-trigger');
         $(trigger_id).toggleClass("show");
         $('body').toggleClass("offcanvas-active");
});
//navbar js ends

// close if press ESC button
      $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
        }
});

// close button
$(".btn-close").click(function(e){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});


})
//navbar ends
//slideshow js starts
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
  counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == 1) {
      counter = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
  else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    hideImages();
    removeDots();
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 2900);
//slideshow js ends

// ......................................................
//mini slideshow js starts
var minicircles = document.getElementsByClassName('minicircle');
var minicounter = 0;

// REMOVE ALL DOTS FUNCTION
function miniremoveDots() {
  for (var i = 0; i < minicircles.length; i++) {
    minicircles[i].classList.remove('minidot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function miniimageLoop() {
  var minicurrentDot = minicircles[minicounter];
  miniremoveDots();
  minicurrentDot.classList.add('minidot');
  minicounter++;
}

// IMAGE SLIDE FUNCTION
function minislideshow() {
  if (minicounter < minicircles.length) {
    miniremoveDots();
    miniimageLoop();
  } else {
    minicounter = 0;
    miniimageLoop();
  }
}
// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(minislideshow, 500);
var miniimageSlideshowInterval = setInterval(minislideshow, 3000);
// minislideshow js ends

// Web Design Agency Process slideshow js starts
var wl_process_imageSlides = document.getElementsByClassName('wl_process_imageSlides');
var wl_process_circles = document.getElementsByClassName('wl_process_circle');
var wl_process_leftArrow = document.getElementById('wl_process_leftArrow');
var wl_process_rightArrow = document.getElementById('wl_process_rightArrow');
var wl_process_counter = 0;

// HIDE ALL IMAGES FUNCTION
function wl_process_hideImages() {
  for (var i = 0; i < wl_process_imageSlides.length; i++) {
    wl_process_imageSlides[i].classList.remove('wl_process_visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function wl_process_removeDots() {
  for (var i = 0; i < wl_process_imageSlides.length; i++) {
    wl_process_circles[i].classList.remove('wl_process_dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function wl_process_imageLoop() {
  var wl_process_currentImage = wl_process_imageSlides[wl_process_counter];
  var wl_process_currentDot = wl_process_circles[wl_process_counter];
  wl_process_currentImage.classList.add('wl_process_visible');
  wl_process_removeDots();
  wl_process_currentDot.classList.add('wl_process_dot');
  // wl_process_counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function wl_process_arrowClick(f) {
  var wl_process_target = f.target;
  if (wl_process_target == wl_process_leftArrow) {
    clearInterval(wl_process_imageSlideshowInterval);
    wl_process_hideImages();
    wl_process_removeDots();
    if (wl_process_counter == 0) {
      wl_process_counter = 6;
      wl_process_imageLoop();
      // wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    } else {
      wl_process_counter--;
      // wl_process_counter--;
      wl_process_imageLoop();
      // wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
  }
  else if (wl_process_target == wl_process_rightArrow) {
    clearInterval(wl_process_imageSlideshowInterval);
    wl_process_hideImages();
    wl_process_removeDots();
    if (wl_process_counter ==  0) {
      wl_process_counter = 1;
      wl_process_imageLoop();
      // wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }else if (wl_process_counter == 6) {
      wl_process_counter = 0;
      wl_process_imageLoop();
      // wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    } else {
      wl_process_counter++;
      wl_process_imageLoop();
      // wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
  }
}

wl_process_leftArrow.addEventListener('click', wl_process_arrowClick);
wl_process_rightArrow.addEventListener('click', wl_process_arrowClick);
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
document.getElementsByClassName('wl_process_circle')[0].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[1].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[2].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[3].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[4].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[5].addEventListener('click', wl_process_Click);
document.getElementsByClassName('wl_process_circle')[6].addEventListener('click', wl_process_Click);
function wl_process_Click(e) {
  var wl_process_target = e.target;
  console.log(wl_process_target);
    clearInterval(wl_process_imageSlideshowInterval);
    wl_process_hideImages();
    wl_process_removeDots();
    if (wl_process_target == document.getElementsByClassName('wl_process_circle')[0]) {
      wl_process_counter = 0;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[1]){
      wl_process_counter = 1;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[2]){
      wl_process_counter = 2;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[3]){
      wl_process_counter = 3;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[4]){
      wl_process_counter = 4;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[5]){
      wl_process_counter = 5;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
    else if(wl_process_target == document.getElementsByClassName('wl_process_circle')[6]){
      wl_process_counter = 6;
      wl_process_imageLoop();
      wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
    }
}
// IMAGE SLIDE FUNCTION
function wl_process_slideshow() {
  if (wl_process_counter < wl_process_imageSlides.length) {
    wl_process_hideImages();
    wl_process_removeDots();
    wl_process_imageLoop();
  } else {
    wl_process_counter = 0;
    wl_process_hideImages();
    wl_process_imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(wl_process_slideshow, 1000);
var wl_process_imageSlideshowInterval = setInterval(wl_process_slideshow, 5000);
//Web Design Agency Process slideshow js ends

// CSS Animations on Scroll - Multi Step Move starts
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
// CSS Animations on Scroll - Multi Step Move starts

//show and hide wl Agency process start
function ShowHideAgency1() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter1");
  if (mob_wl_ag_matter.style.display === "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}
function ShowHideAgency2() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter2");
  if (mob_wl_ag_matter.style.display === "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}

function ShowHideAgency3() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter3");
  if (mob_wl_ag_matter.style.display === "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}

function ShowHideAgency4() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter4");
  if (mob_wl_ag_matter.style.display === "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}

function ShowHideAgency5() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter5");
  if (mob_wl_ag_matter.style.display === "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}

function ShowHideAgency6() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter6");
  if (mob_wl_ag_matter.style.display == "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}

function ShowHideAgency7() {
  var mob_wl_ag_matter = document.getElementById("mob_wl_ag_matter7");
  if (mob_wl_ag_matter.style.display == "block") {
    mob_wl_ag_matter.style.display = "none";
  } else {
    mob_wl_ag_matter.style.display = "block";
  }
}
// show and hide wl Agency process end

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

// cloak
 setInterval(() => {
     d = new Date(); //object of date()
     hr = d.getHours();
     min = d.getMinutes();
     sec = d.getSeconds();
     hr_rotation = 30 * hr + min / 2; //converting current time
     min_rotation = 6 * min;
     sec_rotation = 6 * sec;

     hour.style.transform = `rotate(${hr_rotation}deg)`;
     minute.style.transform = `rotate(${min_rotation}deg)`;
     second.style.transform = `rotate(${sec_rotation}deg)`;
 }, 1000);
