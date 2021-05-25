// Make navbar appear and disappear on scroll
// Code taken from: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset + 100;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-40%";
    }
    prevScrollpos = currentScrollPos;
};
// END of credit

// Create pictures slideshow for the home page 
// Code taken from: https://github.com/codingWithElias/Full-Screen-Image-Slider-With-HTML-CSS-JS
let slide = document.querySelectorAll('.slide');
var current = 0;

function clearSlide() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    clearSlide();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    let x = 0.4;
    let intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 50);

}

function prev() {
    clearSlide();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    let x = 0.4;
    let intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 50);
}

function start() {
    clearSlide();
    slide[current].style.display = 'block';
}
start();
// END of credit 

// Add class "active" based on button selected (day or night)
$('.btn-dn').click(function(){
    $('.btn-dn').removeClass('active');
    $('.btn-activity').removeClass('active');
    $('.btn-specific').removeClass('active');
    $(this).addClass('active')
});

// Add class "active" based on button selected (activities --> ex. historical site, restaurants, etc)
$('.btn-activity').click(function(){
    $('.btn-activity').removeClass('active');
    $('.btn-specific').removeClass('active');
    $(this).addClass('active')
});

// Add class "active" based on button selected (specific location)
$('.btn-specific').click(function(){
    $('.btn-specific').removeClass('active');
    $(this).addClass('active')
});