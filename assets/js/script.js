// Code based on: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
$("#hero-slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#hero-slideshow > div:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#hero-slideshow');
}, 6000);