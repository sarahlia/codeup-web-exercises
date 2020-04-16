"use strict";
(function() {
    $(document).ready(function() {
        //ajax--OpenWeather API
        var restHTML = '';

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            "APPID": OWM_KEY,
            "q": "Richardson, US",
            "units": "imperial"
        }).done(function(data) {
            console.log(data);

            $('#forecast').empty();

            //weather info for each card
            for (var i = 0; i < 40; i+=8) {
                var date = data.list[i].dt_txt;
                var temp = data.list[i].main.temp;
                console.log(temp);
                var description = data.list[i].weather[0].description;
                console.log(description);
                var humidity = data.list[i].main.humidity;
                console.log(humidity);
                var wind = data.list[i].wind.speed;
                console.log(wind);
                var pressure = data.list[i].main.pressure;
                console.log(pressure);

                var weatherIcon = data.list[i].weather[0].icon;
                console.log(weatherIcon);
                var iconImage = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
                console.log(iconImage);

                restHTML = '<div class="col card" style="width: 18rem;">';
                restHTML += '<div class="card-header">';
                restHTML += date;
                restHTML += '</div>';
                restHTML += '<ul class="list-group list-group-flush"></ul>';
                restHTML += '<li class="list-group-item">' + temp +'°F<span><img alt="weather icon" src=' + iconImage + '></span></li>';
                // restHTML += '<img alt="weather icon" src=' + iconImage + '>';
                restHTML += '<li class="list-group-item">' + description + '</li>';
                restHTML += '<li class="list-group-item">Humidity: ' + humidity +'</li>';
                restHTML += '<li class="list-group-item">Wind: ' + wind +'</li>';
                restHTML += '<li class="list-group-item">Pressure: ' + pressure +'</li>';
                restHTML += '</div>'

                $('#forecast').append(restHTML);

            }

        }).fail(function(errors) {
            console.error(errors);
        });


        //Mapbox API -- map
        mapboxgl.accessToken = mapboxToken2
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 12,
            center: [-96.7297, 32.9482],
            draggable: true,
        });

        //marker
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-96.7297, 32.9482])
            .addTo(map);

        var coordinates = $('#coordinates');
        //add event handler (get coordinates) at the end of marker drag
        function onDragEnd() {
            var lngLat = marker.getLngLat();
            coordinates.css('visibility', 'visible');
            coordinates.html('Longitude: ' + lngLat.lng + '<br>Latitude: ' + lngLat.lat);
        }
        marker.on('dragend', onDragEnd);

        var droppedLong = marker.getLngLat().lng;
        console.log(droppedLong);
        var droppedLat = marker.getLngLat().lat;
        console.log(droppedLat);

    });

})();