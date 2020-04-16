"use strict";
$(document).ready(function() {

    mapboxgl.accessToken = mapboxToken2
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 12,
        center: [-96.7297, 32.9482],
        draggable: true,
    });

    var coordinates = $('#coordinates');

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-96.7297, 32.9482])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.css('visibility', 'visible');
        coordinates.html('Longitude: ' + lngLat.lng + '<br>Latitude: ' + lngLat.lat);
    }
    marker.on('dragend', onDragEnd);
});