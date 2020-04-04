var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 0
});

var restaurants = [
    {
        address: "6602 Melrose Ave, Los Angeles, CA 90038",
        info: "<strong>Osteria Mozza</strong><br>Italian restaurant<br>Los Angeles, CA, United States"

    },
    {
        address: "Viale Pasitea, 236, 84017 Positano SA, Italy",
        info: "<strong>Mediterraneo</strong><br>Mediterranean cuisine<br>Positano, Italy"

    },
    {
        address: "Jl. Teuku Umar No.1, RT.1/RW.1, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350, Indonesia",
        info: "<strong>Kunstkring</strong><br>Indonesian-Dutch restaurant<br>Jakarta, Indonesia"

    }
];

restaurants.forEach(function(aResto, index) {
    geocode(aResto.address, mapboxToken2).then(function(coordinates) {


        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            // .setPopup(popup)
            .addTo(map);

        var popup = new mapboxgl.Popup()
            .setHTML(aResto.info);
            // .setText(aResto.address);
        // .setDOMContent(div)
        // .addTo(map);

        marker.setPopup(popup);
    });

    // to set Zoom in the JS Console:
    // map.setZoom(n);


});





