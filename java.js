var quoteArray = ["Our DEDICATION Statement is to provide quality services for your Technology needs. Welcome to ResX! Technology Solutions : Over Simplified!"];
var textPosition = 0;
var speed = 65;

typewriter = () => {
  document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
