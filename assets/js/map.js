let layerDay = new L.LayerGroup();
let layerNight = new L.LayerGroup();

let map = L.map('map', {
    center: [35.0116, 135.7681],
    zoom: 11,
    minZoom: 5,
    layers: [layerDay, layerNight]
});

// Create Layers to make markers appear and disappear on command from the map

let mapLight = L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
}).addTo(map);

let mapDark = L.tileLayer(`https://api.maptiler.com/maps/jp-mierune-dark/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
    attribution: `<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
});

let locationBox = document.getElementById('switch');
let contactBox = document.getElementById('switch2');

// --------------- Locations grouped into objects -----------------

const LocationsVar = [

    // Historical sites
    {
        name: "Nijo Castle",
        center: [35.014168, 135.7474],
        zoom: 14,
        group: 'historical',
        id: 'site1',
    },
    {
        name: "Fushimi Inari Taisha",
        center: [34.9671, 135.7727],
        zoom: 14,
        group: 'historical',
        id: 'site2',
    },
    {
        name: "Kyoto Imperial Palace",
        center: [35.0254, 135.7621],
        zoom: 14,
        group: 'historical',
        id: 'site3',
    },
    {
        name: "Kinkaku-ji Temple",
        center: [35.0394, 135.7292],
        zoom: 14,
        group: 'historical',
        id: 'site4',
    },
    {
        name: "To-ji Temple",
        center: [34.9806, 135.7478],
        zoom: 14,
        group: 'historical',
        id: 'site5',
    },

    //Gardens & parks

    {
        name: "Sogenchi Pond Garden",
        center: [35.0156, 135.6734],
        zoom: 14,
        group: 'garden',
        id: 'park1',
    },
    {
        name: "Haradani Garden",
        center: [35.0441, 135.7141],
        zoom: 14,
        group: 'garden',
        id: 'park2',
    },
    {
        name: "Ryōan-ji",
        center: [35.0345, 135.7183],
        zoom: 14,
        group: 'garden',
        id: 'park3',
    },
    {
        name: "Maruyama Park",
        center: [35.0036, 135.7805],
        zoom: 14,
        group: 'garden',
        id: 'park4',
    },

    // Restaurants 

    {
        name: "Saishuan Shiraki",
        center: [35.0165, 135.7661],
        zoom: 14,
        group: 'restaurants',
        id: 'rest1',
    },
    {
        name: "Okonomiyaki Katsu",
        center: [35.0303, 135.7206],
        zoom: 14,
        group: 'restaurants',
        id: 'rest2',
    },
    {
        name: "Sugarhill Kyoto",
        center: [34.9982, 135.7671],
        zoom: 14,
        group: 'restaurants',
        id: 'rest3',
    },
    {
        name: "Kyoto Gion Mikaku",
        center: [35.0051, 135.7726],
        zoom: 14,
        group: 'restaurants',
        id: 'rest4',
    },

    // Bars 

    {
        name: "L'Escamoteur",
        center: [35.0018, 135.7699],
        zoom: 14,
        group: 'bars',
        id: 'bar1',
    },
    {
        name: "Ki Bar",
        center: [35.0082, 135.7710],
        zoom: 14,
        group: 'bars',
        id: 'bar2',
    },
    {
        name: "Kyoto Star Bar",
        center: [35.0073, 135.7709],
        zoom: 14,
        group: 'bars',
        id: 'bar3',
    },
    {
        name: "Butterfly",
        center: [35.0079, 135.7697],
        zoom: 14,
        group: 'bars',
        id: 'bar4',
    },
];

// Import Custom markers 
const greenIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const goldIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const greyIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

//--------------------------------------------------------------------//


/* Show "day-time" locations on map by default on page load
Code based on: https://stackoverflow.com/questions/18646881/auto-click-button-element-on-page-load-using-jquery */
$(document).ready(function () {
    $("#button-day").trigger('click');
});


// Show activities available based on DAY-time or NIGHT-time
function pickSet(selection) {
    let set = document.getElementsByClassName('activity-choice');

    for (let i = 0; i < set.length; i++) {
        set[i].classList.add('hidden');
    }

    document.getElementById(selection).classList.remove('hidden');

    if (selection === "pick-day") {
        pickActivity("pick-historical");
    } else if (selection === "pick-night") {
        pickActivity("pick-restaurants");
    };
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

// Add description
let buttonDayNite = document.getElementsByClassName('btn-dn');

for (let button of buttonDayNite) {
    button.addEventListener('click', function () {
        // ADD description
        // Code taken and modified from: https://stackoverflow.com/questions/42968243/how-to-add-multiple-markers-in-leaflet-js

        for (let i = 0; i < LocationsVar.length; i++) {
            if (button.id === 'button-day') {
                if (LocationsVar[i].group === 'historical') {
                    marker = new L.marker([LocationsVar[i].center[0], LocationsVar[i].center[1]], {
                        icon: greyIcon,
                    });
                } else if (LocationsVar[i].group === 'garden') {
                    marker = new L.marker([LocationsVar[i].center[0], LocationsVar[i].center[1]], {
                        icon: greenIcon,
                    });
                }
                marker.bindPopup(LocationsVar[i].name);
                // End Credit   
                switcher(this);
                // ibid    
            } else if (button.id === 'button-night') {
                if (LocationsVar[i].group === 'restaurants') {
                    marker = new L.marker([LocationsVar[i].center[0], LocationsVar[i].center[1]], {
                        icon: redIcon,
                    });
                } else if (LocationsVar[i].group === 'bars') {
                    marker = new L.marker([LocationsVar[i].center[0], LocationsVar[i].center[1]], {
                        icon: goldIcon,
                    });
                }
                marker.bindPopup(LocationsVar[i].name);
                // End Credit
                switcher(this);
            };
        };
    });
};

// Switch map to day/night mode and change the markers(locations) accordingly 
function switcher(button) {
    map.removeLayer(singleMarker).setView([35.0116, 135.7381], 12);;
    
    if (button.id === "button-day") {
        mapDark.remove();
        mapLight.addTo(map);
        map.removeLayer(layerNight);
        layerDay.addLayer(marker);
        layerDay.addTo(map);
        locationBox.classList.remove('night-mode');
        contactBox.classList.remove('backg-contact-night');
    } else {
        mapLight.remove();
        mapDark.addTo(map);
        map.removeLayer(layerDay);
        layerNight.addLayer(marker);
        layerNight.addTo(map);
        locationBox.classList.add('night-mode');
        contactBox.classList.add('backg-contact-night');
    };
};

// ------

let locationButtons = $('.locations-list li').children();
let singleMarker = {};

for (let i = 0; i < locationButtons.length; i++) {
    locationButtons[i].addEventListener('click', function () {
        map.removeLayer(layerDay);
        map.removeLayer(layerNight);
        let buttonData = locationButtons[i].dataset.location;

        // Inspired by ....
        const findMapLocation = LocationsVar.find(
            (name) => name.id === buttonData);

        map.flyTo(findMapLocation.center, findMapLocation.zoom);
        if (findMapLocation.center) {
            map.removeLayer(singleMarker);
            singleMarker = L.marker(findMapLocation.center).bindPopup(LocationsVar[i].name).addTo(map).openPopup();
        } else {
            map.removeLayer(singleMarker);
        };
    });
};