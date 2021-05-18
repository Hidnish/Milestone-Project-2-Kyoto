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
    let set = document.getElementsByClassName('activity-choice');

    for (let i = 0; i < set.length; i++) {
        set[i].classList.add('hidden');
    }

    document.getElementById(selection).classList.remove('hidden');
}

function pickActivity(selection) {
    let activities = document.getElementsByClassName('locations-box');
    let places = document.getElementsByClassName('locations-box-inner');

    for (let i = 0; i < activities.length; i++) {
        activities[i].classList.add('hidden');
    }
    for (let i = 0; i < places.length; i++) {
        places[i].classList.add('hidden');
    }

    document.getElementById(selection).classList.remove('hidden');
}

function pickPlace(selection) {
    let activities = document.getElementsByClassName('locations-box');
    let places = document.getElementsByClassName('locarions-box-inner');

    for (let i = 0; i < activities.length; i++) {
        activities[i].classList.add('hidden');
    }
    for (let i = 0; i < places.length; i++) {
        places[i].classList.add('hidden');
    }

    document.getElementById(selection).classList.remove('hidden');
}


