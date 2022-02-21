// Prevents navbar from disappearing on page load
window.onload = function () {
    document.getElementById("navbar").style.top = 0;
};

if (!isMobile()) {
    // Make navbar disappear/appear on scroll 
    // CREDIT, code taken from: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 100) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = 0;
            } else {
                document.getElementById("navbar").style.top = '-10%';
            }
            prevScrollpos = currentScrollPos;
        }
    };
    //END of credit 
}

// Prevent navbar from appeating/disappearing on scroll on mobile browsers
// CREDIT, code taken from: https://stackoverflow.com/questions/12259701/how-do-i-prevent-a-script-from-running-on-mobile-devices
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

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
}, 6000);
// END of credit

// Smooth scrolling to the desired section of the page when the respective achor link is clicked 
// CREDIT, Code taken from: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
});
// END of credit

// Connect About-section's buttons to their specific list of places in the Location-section
$(window).click(function (button) {
    if ($(button.target).hasClass('historical')) {
        typeSelection('#button-day', '#historicalSites');
    } else if ($(button.target).hasClass('parks')) {
        typeSelection('#button-day', '#parksGardens');
    } else if ($(button.target).hasClass('restaurants')) {
        typeSelection('#button-night', '#restaurants');
    } else if ($(button.target).hasClass('bars')) {
        typeSelection('#button-night', '#barsClubs');
    }
});

function typeSelection(time, activity) {
    $(time).trigger('click');
    $(activity).trigger('click');
}

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


// Fade-in animation
const boxes = gsap.utils.toArray('.fade-in');

boxes.forEach((box, i) => {
    let anim;

    if (i === 0) {
        anim = gsap.fromTo(box, {autoAlpha: 0, y: 75}, {duration: 2, autoAlpha: 1, y: 0});
    } else if (i % 2 != 0) {
        anim = gsap.fromTo(box, {autoAlpha: 0, x: 100}, {duration: 2, autoAlpha: 1, x: 0});
    } else {
        anim = gsap.fromTo(box, {autoAlpha: 0, x: -100}, {duration: 2, autoAlpha: 1, x: 0});
    }

    ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
});
