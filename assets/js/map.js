  // Show activities available based on DAY or NIGHT

  let map = L.map('map', {
      center: [35.0116, 135.7681],
      zoom: 11,
  });

  L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
      attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
  }).addTo(map);


  // Locations grouped into objects

  const locationsDay = [{
          name: "Nijo Castle",
          center: [35.014168, 135.747498],
          zoom: 8,
          group: 'historical',
      },
      {
          name: "Fushimi Inari Taisha",
          center: [34.9671, 135.7727],
          zoom: 8,
          group: 'historical',
      },
      {
          name: "Kyoto Imperial Palace",
          center: [35.0254, 135.7621],
          zoom: 8,
          group: 'historical',
      },
      {
          name: "Kinkaku-ji Temple",
          center: [35.0394, 135.7292],
          zoom: 8,
          group: 'historical',
      },
      {
          name: "To-ji Temple",
          center: [34.9806, 135.7478],
          zoom: 8,
          group: 'historical',
      },
      {
          name: "Sogenchi Pond Garden",
          center: [35.0156, 135.6734],
          zoom: 8,
          group: 'garden',
      },
      {
          name: "Haradani Garden",
          center: [35.0441, 135.7141],
          zoom: 8,
          group: 'garden',
      },
      {
          name: "Ryōan-ji",
          center: [35.0345, 135.7183],
          zoom: 8,
          group: 'garden',
      },
      {
          name: "Maruyama Park",
          center: [35.0036, 135.7805],
          zoom: 8,
          group: 'garden',
      },
  ];

  const locationsNight = [{
          name: "saishuan shiraki",
          center: [35.0165, 135.7661],
          zoom: 8,
          group: 'restaurants',
      },
      {
          name: "Okonomiyaki Katsu",
          center: [35.0303, 135.7206],
          zoom: 8,
          group: 'restaurants',
      },
      {
          name: "Sugarhill Kyoto",
          center: [34.9982, 135.7671],
          zoom: 8,
          group: 'restaurants',
      },
      {
          name: "Kyoto Gion Mikaku",
          center: [35.0051, 135.7726],
          zoom: 8,
          group: 'restaurants',
      },
      {
          name: "",
          center: [],
          zoom: 8,
          group: 'bars',
      },
  ];

  // Import Customised markers 
  const greenIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });

  // Code taken and modified from: https://stackoverflow.com/questions/42968243/how-to-add-multiple-markers-in-leaflet-js
  /*for (let i = 0; i < locationsDay.length; i++) {

       if (locationsDay[i].group === 'historical') {
           marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]])
       } else {
           marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]], {
               icon: greenIcon
           })
       }
       marker.bindPopup(locationsDay[i].name).addTo(map);
   };*/
  // END credit

  // Show activities available based on DAY or NIGHT
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


  /* document.getElementById('button-day').addEventListener('click', function () {
       for (let i = 0; i < locationsDay.length; i++) {

           if (locationsDay[i].group === 'historical') {
               marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]])
           } else {
               marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]], {
                   icon: greenIcon
               })
           }
           marker.bindPopup(locationsDay[i].name).addTo(map);
       };
   })*/

  let buttonDayNite = document.getElementsByClassName('btn-dn');

  for (let button of buttonDayNite) {
      button.addEventListener('click', function () {

          if (button.id == 'button-day') {
              for (let i = 0; i < locationsDay.length; i++) {
                  if (locationsDay[i].group === 'historical') {
                      marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]])
                  } else /*if (locationsDay[i].group === 'parks')*/ {
                      marker = new L.marker([locationsDay[i].center[0], locationsDay[i].center[1]], {
                          icon: greenIcon
                      });
                    }
                  marker.bindPopup(locationsDay[i].name).addTo(map);
              }
          } else if (button.id == 'button-night') {
              for (let i = 0; i < locationsNight.length; i++) {
                  if (locationsNight[i].group === 'restaurants') {
                      marker = new L.marker([locationsNight[i].center[0], locationsDay[i].center[1]])
                  } else {
                      marker = new L.marker([locationsNight[i].center[0], locationsDay[i].center[1]], {
                          icon: greenIcon
                      });
                  }
                  marker.bindPopup(locationsDay[i].name).addTo(map);
              }
          };
      });
  };