var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 15
});

geocode("6602 Melrose Ave, Los Angeles, CA 90038", mapboxToken2).then(function(result) {
    console.log(result);
    map.setCenter(result);

    // map.jumpTo({center: result});
    // map.flyTo({center: result});
});

var markerOptions = {
    color: "red"
};

var div = window.document.createElement('div');
div.innerHTML = 'Osteria Mozza';

var popup = new mapboxgl.Popup()
    // .setText("Osteria Mozza")
    .setDOMContent(div)
    .addTo(map);

var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-118.338942, 34.083393])
    .setPopup(popup)
    .addTo(map);

// marker.setPopup(popup);

