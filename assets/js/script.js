// Code taken from: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
/*$("#hero-slideshow > div:gt(0)").hide();

setInterval(() => { 
  $('#hero-slideshow > div:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#hero-slideshow');
}, 6000);*/


//Code taken from: https://github.com/codingWithElias/Full-Screen-Image-Slider-With-HTML-CSS-JS
let slide = document.querySelectorAll('.slide');
        var current = 0;

        function cls(){
            for(let i = 0; i < slide.length; i++){
                  slide[i].style.display = 'none';
            }
        }

        function next(){
            cls();
            if(current === slide.length-1) current = -1;
            current++;

            slide[current].style.display = 'block';
            slide[current].style.opacity = 0.4;

            var x = 0.4;
            var intX = setInterval(function(){
                x+=0.1;
                slide[current].style.opacity = x;
                if(x >= 1) {
                    clearInterval(intX);
                    x = 0.4;
                }
            }, 100);

        }

        function prev(){
            cls();
            if(current === 0) current = slide.length;
            current--;

            slide[current].style.display = 'block';
            slide[current].style.opacity = 0.4;

            var x = 0.4;
            var intX = setInterval(function(){
                x+=0.1;
                slide[current].style.opacity = x;
                if(x >= 1) {
                    clearInterval(intX);
                    x = 0.4;
                }
            }, 100);

        }

        function start(){
            cls();
            slide[current].style.display = 'block';
        }
        start();
        
// END of credit 