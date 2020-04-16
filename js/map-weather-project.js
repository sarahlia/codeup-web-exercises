"use strict";
$(document).ready(function() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhsaWEiLCJhIjoiY2s4ajhiMndkMGU3ODNrcW1jeDRocjhtMiJ9.llxRsa9CU8ZUq0qW-pXIlg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 12,
        center: [-96.7297, 32.9482],
        draggable: true,
        // maxZoom: 5
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