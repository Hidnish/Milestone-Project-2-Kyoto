// Prevents navbar from disappearing on page load
window.onload = function() {
document.getElementById("navbar").style.top = 0;
};
// add credit
if (!isMobile()) {
    // Make navbar disappear/appear on scroll 
    // CREDIT, code taken from: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = 0;
        } else {
            document.getElementById("navbar").style.top = '-50%';
        }
        prevScrollpos = currentScrollPos;
    };
    //END of credit 
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


// Smooth scrolling to the desired section of the page when the respective achor link is clicked 
// CREDIT, Code taken from: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
});
// END of credit 

// Add class 'active' based on button selected (day or night)
$('.btn-dn').click(function () {
    $('.btn').removeClass('active');
    $(this).addClass('active');
    if (this.id === 'button-day') {
        $('#historicalSites').trigger('click');
    } else {
        $('#restaurants').trigger('click');
    }
});

// Add class 'active' based on button selected (activities --> ex. historical site, restaurants, etc)
$('.btn-activity').click(function () {
    $('.btn-activity').removeClass('active');
    $('.btn-specific').removeClass('active');
    $(this).addClass('active');
});

// Add class 'active' based on button selected (specific location)
$('.btn-specific').click(function () {
    $('.btn-specific').removeClass('active');
    $(this).addClass('active');
});

// Fade-in animation for 'about-section' content(text)
// CREDIT, Code taken and modified: https://www.youtube.com/watch?v=ygcEKd0RIGg&ab_channel=DesignCourse
let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#home',
        start: 'center top'
    }
});

let timeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-heading',
        start: 'center top'
    }
});

timeLine.from('.about-heading-content', {
    y: 100,
    opacity: 0,
    duration: 1.5
}, "-=1");

timeLine2.from('.about-info', {
    y: 100,
    opacity: 0,
    duration: 1.5
}, "-=1");
// END of credit

// Auto-play home gallery
// CREDIT, Code taken and modified from: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/   
$(".img-frame:gt(0)").hide();
setInterval(function () {
    $(".img-frame:first")
        .fadeOut(4000)
        .next()
        .fadeIn(4000)
        .end()
        .appendTo("#home");
}, 8000);