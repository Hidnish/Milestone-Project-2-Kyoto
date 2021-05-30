// Create Layers to make markers appear and disappear on command from the map
let layerDay = new L.LayerGroup();
let layerNight = new L.LayerGroup();

let map = L.map('map', {
    center: [35.0116, 135.7681],
    zoom: 11,
    minZoom: 5,
    layers: [layerDay, layerNight]
});

//Tile Layer for DAY locations
let mapLight = L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=hrCIQZjIaCYMPLCxXgBt`, {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
}).addTo(map);

//Tile layer for NIGHT locations 
let mapDark = L.tileLayer(`https://api.maptiler.com/maps/jp-mierune-dark/{z}/{x}/{y}.png?key=hrCIQZjIaCYMPLCxXgBt`, {
    attribution: `<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
});

// --------------- Locations grouped into objects -----------------
const locationsArray = [

    // Historical sites
    {
        name: "Nijo Castle",
        center: [35.014168, 135.7474],
        zoom: 14,
        website: 'https://nijo-jocastle.city.kyoto.lg.jp/',
        address: '541 Nijojocho, Nakagyo Ward',
        imgUrl: 'https://www.japan-guide.com/g18/3918_03.jpg',
        group: 'day',
        id: 'site1',
    },
    {
        name: "Fushimi Inari Taisha",
        center: [34.9671, 135.7727],
        zoom: 14,
        website: 'http://inari.jp/',
        address: '68 Fukakusa Yabunouchicho, Fushimi Ward',
        imgUrl: 'https://jw-webmagazine.com/wp-content/uploads/2019/07/jw-5d1b45c79c8f28.39645637.jpeg',
        group: 'day',
        id: 'site2',
    },
    {
        name: "Kyoto Imperial Palace",
        center: [35.0254, 135.7621],
        zoom: 14,
        website: 'https://sankan.kunaicho.go.jp/guide/kyoto.html',
        address: '3 Kyotogyoen, Kamigyo Ward',
        imgUrl: 'https://live.staticflickr.com/560/32590403282_cd96e115d8_b.jpg',
        group: 'day',
        id: 'site3',
    },
    {
        name: "Kinkaku-ji Temple",
        center: [35.0394, 135.7292],
        zoom: 14,
        website: 'https://www.shokoku-ji.jp/kinkakuji/',
        address: '1 Kinkakujicho, Kita Ward',
        imgUrl: 'https://www.japan-guide.com/g18/3908_top.jpg',
        group: 'day',
        id: 'site4',
    },
    {
        name: "To-ji Temple",
        center: [34.9806, 135.7478],
        zoom: 14,
        website: 'https://toji.or.jp/',
        address: '1 Kujocho, Minami Ward',
        imgUrl: 'https://www.travelcaffeine.com/wp-content/uploads/2017/06/tijo-temple-kyoto-japan-pagoda.jpg',
        group: 'day',
        id: 'site5',
    },

    //Gardens & parks

    {
        name: "Sogenchi Pond Garden",
        center: [35.0156, 135.6734],
        zoom: 14,
        website: 'http://www.tenryuji.com/en/precincts/index.html',
        address: '68 Sagatenryuji Susukinobabacho, Ukyo Ward',
        imgUrl: 'https://d3bbatwdaufxg9.cloudfront.net/content/6014/5552/3572/03-20140604_Arashiyama_Tenryuji-32.jpg',
        group: 'day',
        id: 'park1',
    },
    {
        name: "Haradani Garden",
        center: [35.0441, 135.7141],
        zoom: 14,
        website: 'http://www.haradanien.com/',
        address: '36 Okitayamaharadaniinuicho, Kita Ward',
        imgUrl: 'https://www.japan-guide.com/blog/sakura17/g/170418_kyoto_18.jpg',
        group: 'day',
        id: 'park2',
    },
    {
        name: "Ryōan-ji",
        center: [35.0345, 135.7183],
        zoom: 14,
        website: 'http://www.ryoanji.jp/top.html',
        address: '13 Ryoanji Goryonoshitacho, Ukyo Ward',
        imgUrl: 'https://d3bbatwdaufxg9.cloudfront.net/content/4914/5551/8472/04-20140422_Ryoanji_Mainspot-166.jpg',
        group: 'day',
        id: 'park3',
    },
    {
        name: "Maruyama Park",
        center: [35.0036, 135.7805],
        zoom: 14,
        website: 'https://kyoto-maruyama-park.jp/',
        address: 'Maruyamacho, Higashiyama Ward',
        imgUrl: 'https://www.japan365days.com/img/kyoto/maruyama_park/maruyama-park-in-kyoto.jpg',
        group: 'day',
        id: 'park4',
    },

    // Restaurants 

    {
        name: "Saishuan Shiraki",
        center: [35.0165, 135.7661],
        zoom: 14,
        website: 'https://m.facebook.com/SaishuanShiraki',
        address: 'Funaya-cho 420-3',
        imgUrl: 'https://images.happycow.net/venues/1024/17/95/hcmp179578_853472.jpeg',
        group: 'night',
        id: 'rest1',
    },
    {
        name: "Okonomiyaki Katsu",
        center: [35.0303, 135.7206],
        zoom: 14,
        website: 'https://okonomiyakikatsu.wixsite.com/katsu',
        address: '1-4 Ryoanji Saigucho, Ukyo Ward',
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/26/64/46/okonomiyaki.jpg',
        group: 'night',
        id: 'rest2',
    },
    {
        name: "Sugarhill Kyoto",
        center: [34.9982, 135.7671],
        zoom: 14,
        website: 'https://sugarhillkyoto.business.site/?utm_source=gmb&utm_medium=referral',
        address: '725 Uematsucho, Shimogyo Ward',
        imgUrl: 'https://suggestionofmotion.com/wp-content/uploads/JPN_Kyoto_Kim-Chee-Fried-Rice_010_Chicken-Karaage.jpg',
        group: 'night',
        id: 'rest3',
    },
    {
        name: "Kyoto Gion Mikaku",
        center: [35.0051, 135.7726],
        zoom: 14,
        website: 'https://mikaku.co.jp/',
        address: '165番地 Tokiwacho, Higashiyama Ward',
        imgUrl: 'https://mikaku.co.jp/web/wp-content/themes/mikaku/assets/img/en/sp/intro_pic.jpg',
        group: 'night',
        id: 'rest4',
    },

    // Bars 

    {
        name: "L'Escamoteur",
        center: [35.0018, 135.7699],
        zoom: 14,
        website: 'https://www.tripadvisor.com/Attraction_Review-g298564-d8293322-Reviews-L_Escamoteur_Bar-Kyoto_Kyoto_Prefecture_Kinki.html',
        address: '138-9 Saitocho, Shimogyo Ward',
        imgUrl: 'https://www.theworlds50best.com/discovery/filestore/jpg/LEscamoteur-Kyoto-Japan-03.jpg',
        group: 'night',
        id: 'bar1',
    },
    {
        name: "Ki Bar",
        center: [35.0082, 135.7710],
        zoom: 14,
        website: 'https://www.kibarkyoto.com/',
        address: 'Ki Bar 122−1, Ishiyacho, Nakagyo Ward',
        imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/a2/7f/29/ki-west-new-bar-in-kyoto.jpg',
        group: 'night',
        id: 'bar2',
    },
    {
        name: "Kyoto Star Bar",
        center: [35.0073, 135.7709],
        zoom: 14,
        website: 'http://www.starbar.jp/kyoto-star-bar/',
        address: '〒604-8017 Kyoto, Nakagyo Ward',
        imgUrl: 'https://tblg.k-img.com/restaurant/images/Rvw/89657/640x640_rect_89657656.jpg',
        group: 'night',
        id: 'bar3',
    },
    {
        name: "Butterfly",
        center: [35.0079, 135.7697],
        zoom: 14,
        website: 'http://butterfly-kyoto.com/',
        address: '〒604-8031 Kyoto, Nakagyo Ward',
        imgUrl: 'https://japan-nightclub.com/img/clubgalleryalbum/butterfly/event1508.1/butterfly3.jpg',
        group: 'night',
        id: 'bar4',
    },
];

//--------------------------------------------------------------------//

// Show "day-time" locations on map + list of historical sites: by default on page load
// Code based on: https://stackoverflow.com/questions/18646881/auto-click-button-element-on-page-load-using-jquery 
$(document).ready(function () {
    $("#button-day").trigger('click');
});
// END of Credit

let locationBox = document.getElementById('switch');
let contactBox = document.getElementById('switch2');

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
    }
}

// Show locations available for the kind of activity selected 
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


let buttonDayNite = document.getElementsByClassName('btn-dn');

for (let button of buttonDayNite) {
    button.addEventListener('click', function () {

        // Populate the map with specific markers based on whether the user clicks "DAY" or "NIGHT"
        // CREDIT, Code taken and modified from: https://stackoverflow.com/questions/42968243/how-to-add-multiple-markers-in-leaflet-js
        for (let i = 0; i < locationsArray.length; i++) {
            let locationType = locationsArray[i].group;


            //END of credit    

            if (button.id === 'button-day' && locationType === 'day') {
                markerCreator(i);
                switcher(false);
                locationBox.classList.remove('night-mode');
                contactBox.classList.remove('backg-contact-night');

            } else if (button.id === 'button-night' && locationType === 'night') {
                markerCreator(i);
                switcher(true);
                locationBox.classList.add('night-mode');
                contactBox.classList.add('backg-contact-night');
            }
        }
    });
}

// Function to Create a marker + info popups for the array of locations selected 
function markerCreator(index) {
    marker = new L.marker([locationsArray[index].center[0], locationsArray[index].center[1]]);
    marker.bindPopup(`</div><h6>${locationsArray[index].name}</h6>
                <strong>Address:</strong> ${locationsArray[index].address}<br>
                <strong>Website:</strong><a href='${locationsArray[index].website}' target='_blank'> Click here</a><br><br>
                <img src=${locationsArray[index].imgUrl} height='95px' width='170px' style='border-radius:5px; display: block; margin:0 auto'>`);
}

// Switch map to day/night mode and change the markers on the map accordingly 
function switcher(isDark) {
    map.removeLayer(singleMarker).setView([35.0116, 135.7381], 12);

    if (isDark) {
        mapLight.remove();
        mapDark.addTo(map);
        map.removeLayer(layerDay);
        layerNight.addLayer(marker);
        layerNight.addTo(map);
    } else {
        mapDark.remove();
        mapLight.addTo(map);
        map.removeLayer(layerNight);
        layerDay.addLayer(marker);
        layerDay.addTo(map);
    }
}

// ------

let locationButtons = $('.locations-list li').children();
let singleMarker = {};

// Function to clear the map and generate one single marker based on which location button the user has clicked
for (let i = 0; i < locationButtons.length; i++) {
    locationButtons[i].addEventListener('click', function () {
        map.removeLayer(layerDay);
        map.removeLayer(layerNight);
        let buttonData = locationButtons[i].dataset.location;

        /* Code taken and modified from: https://github.com/JimLynx/CI-MS2-Safari-Africa/blob/master/assets/js/map.js &
                                         https://stackoverflow.com/a/35398031/13484385*/
        const findMapLocation = locationsArray.find(
            (place) => place.id === buttonData);

        map.flyTo(findMapLocation.center, findMapLocation.zoom);
        if (findMapLocation.center) {
            map.removeLayer(singleMarker);
            singleMarker = L.marker(findMapLocation.center)
                .bindPopup(`</div><h6>${locationsArray[i].name}</h6>
                <strong>Address:</strong> ${locationsArray[i].address}<br>
                <strong>Website:</strong><a href='${locationsArray[i].website}' target='_blank'> Click here</a><br><br>
                <img src=${locationsArray[i].imgUrl} height='95px' width='170px' style='border-radius:5px; display: block; margin:0 auto'>`)
                .addTo(map).openPopup();
            //END of credit

            //Center map on popup rather than marker: prevents the popup to overflow outside the map
            //CREDIT Code taken from: https://stackoverflow.com/questions/22538473/leaflet-center-popup-and-marker-to-the-map    
            map.on('popupopen', function (e) {
                var px = map.project(e.target._popup._latlng); // find the pixel location on the map where the popup anchor is
                px.y -= e.target._popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
                map.panTo(map.unproject(px), {
                    animate: true
                }); // pan to new center
            });
            //END of Credit
        } else {
            map.removeLayer(singleMarker);
        }
    });
}