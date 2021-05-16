let map = L.map('map', {
    center: [35.0116, 135.7681],
    zoom: 11,
});

L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ROK2DASDw4SDlqEDm9v4`, {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
}).addTo(map);
