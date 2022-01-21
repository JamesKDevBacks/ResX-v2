// Message 1
var quoteArray = ["Our DEDICATION Statement is to provide quality services for your Digital World needs. Welcome to ResX! Technology Solutions : Over Simplified!"];
var textPosition = 0;
var speed = 65;

typewriter = () => {
  document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)

// Message 2
var quoteArray1 = ["Do you need help on what you need to build that Top of the Line Gaming personal computer? We can help you with that! Contact us and we can start the consulting as soon as possible!"];
var textPosition = 0;
var speed = 100;

typewriter1 = () => {
  document.querySelector("#message2").innerHTML = quoteArray1[0].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray1[0].length)
    setTimeout(typewriter1, speed);
}

window.addEventListener("load", typewriter1)

// Message 3
var quoteArray2 = ["Cloud Technology is the next best thing! If you would like to know how it can benefit your needs, let us know!"];
var textPosition = 0;
var speed = 100;

typewriter2 = () => {
  document.querySelector("#message3").innerHTML = quoteArray2[0].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray2[0].length)
    setTimeout(typewriter2, speed);
}

window.addEventListener("load", typewriter2)



// slideshow-container
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
