// ......................................................
//mini slideshow js starts
var logo_symbols = document.getElementsByClassName('logo_symbols');
var logo_symbols_counter = 0;

// REMOVE ALL DOTS FUNCTION
function logo_symbols_removeDots() {
  for (var i = 0; i < logo_symbols.length; i++) {
    logo_symbols[i].classList.remove('logo_symbols_dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function logo_symbols_imageLoop() {
  var logo_symbols_currentDot = logo_symbols[logo_symbols_counter];
  logo_symbols_removeDots();
  logo_symbols_currentDot.classList.add('logo_symbols_dot');
  logo_symbols_counter++;
}

// IMAGE SLIDE FUNCTION
function logo_symbols_slideshow() {
  if (logo_symbols_counter < logo_symbols.length) {
    logo_symbols_removeDots();
    logo_symbols_imageLoop();
  } else {
    logo_symbols_counter = 0;
    logo_symbols_imageLoop();
  }
}
// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(logo_symbols_slideshow, 450);
var logo_symbols_imageSlideshowInterval = setInterval(logo_symbols_slideshow, 450);
// minislideshow js ends
