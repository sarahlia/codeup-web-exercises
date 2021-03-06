"use strict";
(function() {
    $(document).ready(function() {
        var restHTML = '';
        //Ajax request to OpenWeather - Richardson
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            "APPID": OWM_KEY,
            "q": "Richardson, US",
            "units": "imperial"
        }).done(updateWeather)
        .fail(function(errors) {
            console.error(errors);
        });

        //generate weather cards/5-day forecast
        function updateWeather(data) {
            $('#forecast').empty();
            for (var i = 0; i < 40; i+=8) {
                var date = data.list[i].dt_txt;
                var tempMin = data.list[i].main.temp_min;
                tempMin = parseInt(tempMin);
                // console.log(tempMin);
                var tempMax = data.list[i].main.temp_max;
                tempMax = parseInt(tempMax);
                var description = data.list[i].weather[0].description;
                // console.log(description);
                var humidity = data.list[i].main.humidity;
                // console.log(humidity);
                var wind = data.list[i].wind.speed;
                // console.log(wind);
                var pressure = data.list[i].main.pressure;
                // console.log(pressure);
                var weatherIcon = data.list[i].weather[0].icon;
                // console.log(weatherIcon);
                var iconImage = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';
                // console.log(iconImage);

                restHTML = '<div class="col card" style="width: 18rem;">';
                restHTML += '<div class="card-header">';
                restHTML += date;
                restHTML += '</div>';
                restHTML += '<ul class="list-group list-group-flush"></ul>';
                restHTML += '<li class="list-group-item">' + tempMin + '/' + tempMax +'°F<span><img alt="weather icon" src=' + iconImage + '></span></li>';
                restHTML += '<li class="list-group-item">' + description + '</li>';
                restHTML += '<li class="list-group-item">Humidity: ' + humidity +'</li>';
                restHTML += '<li class="list-group-item">Wind: ' + wind +'</li>';
                restHTML += '<li class="list-group-item">Pressure: ' + pressure +'</li>';
                restHTML += '</div>'

                $('#forecast').append(restHTML);
            }
        }

        //Mapbox API -- map
        mapboxgl.accessToken = mapboxToken2
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 12,
            center: [-96.7297, 32.9482],
            draggable: true,
        });

        //initial marker
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-96.7297, 32.9482])
            .addTo(map);

        var coordinates = $('#coordinates');
        var Long;
        var Lat;
        //get coordinates when marker is moved
        function onDragEnd() {
            var lngLat = marker.getLngLat();
            var Long = lngLat.lng;
            var Lat = lngLat.lat;
            coordinates.css('visibility', 'visible');
            coordinates.html('Longitude: ' + Long + '<br>Latitude: ' + Lat);
            // console.log(Long);
            // console.log(Lat);
            // feed coordinates from new marker to generate new weather cards:
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                "APPID": OWM_KEY,
                "lat": Lat,
                "lon": Long,
                "units": "imperial"
            }).done(updateWeather)
            .fail(function(errors) {
                console.error(errors);
            });
        }
        //add event handler at the end of marker drag -- execute function onDragEnd
        marker.on('dragend', onDragEnd);

        //geocoder -- form to input location
        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        //append the input form under the id 'geocoder' in the html
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


        var searchBox = $('.mapboxgl-ctrl-geocoder--input');
        // console.log(searchBox);

        // update the weather cards when a new location is entered
        searchBox.keyup(function () {
            var typedInput = searchBox[0].value;
            // console.log(typedInput);
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                "APPID": OWM_KEY,
                "q": typedInput,
                "units": "imperial"
            }).done(updateWeather)
            .fail(function(errors) {
                console.error(errors);
            });

            if (typedInput !== "") {
                marker.remove();
                coordinates.css('visibility', 'hidden');
            }
        });


    });

})();