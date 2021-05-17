// Code based on: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
$("#hero-slideshow > div:gt(0)").hide();

setInterval(() => { 
  $('#hero-slideshow > div:first')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .end()
  .appendTo('#hero-slideshow');
}, 6000);

// Show activities available based on DAY or NIGHT

function pickSet(selection) {
    let activities = document.getElementsByClassName('activity-choice');

    for (let i = 0; i < activities.length; i++) {
        activities[i].classList.add('hidden');
    }

    document.getElementById(selection).classList.remove('hidden');
};

// Show list of Locations based on the activity selected

function pickActivity(selection) {
    let list = document.getElementsByClassName('locations-box')

    for (let i = 0; i < list.length; i++) {
        list[i].classList.add('hidden')
    }

    document.getElementById(selection).classList.remove('hidden');
}