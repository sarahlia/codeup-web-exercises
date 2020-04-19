"use strict";
(function() {
    $(document).ready(function() {
        var restHTML = '';
        //Ajax request to OpenWeather for current city
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            "APPID": OWM_KEY,
            "q": "Richardson, US",
            "units": "imperial"
        }).done(function(data) {
            console.log(data);
            $('#forecast').empty();
            currentCityForecastHTML();
            //weather cards/5-day forecast for current city
            function currentCityForecastHTML(city) {
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
        var Long;
        var Lat;
        //get coordinates when marker is moved
        function onDragEnd() {
            var lngLat = marker.getLngLat();
            var Long = lngLat.lng;
            var Lat = lngLat.lat;
            coordinates.css('visibility', 'visible');
            coordinates.html('Longitude: ' + lngLat.lng + '<br>Latitude: ' + lngLat.lat);
            console.log(Long);
            console.log(Lat);
            // feed coordinates from new marker/city to generate new weather cards/5-day forecast:
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                "APPID": OWM_KEY,
                "lat": Lat,
                "lon": Long,
                "units": "imperial"
            }).done(function(data) {
                $('#forecast').empty();
                for (var i = 0; i < 40; i+=8) {
                    var date = data.list[i].dt_txt;
                    var temp = data.list[i].main.temp;
                    var description = data.list[i].weather[0].description;
                    var humidity = data.list[i].main.humidity;
                    var wind = data.list[i].wind.speed;
                    var pressure = data.list[i].main.pressure;
                    var weatherIcon = data.list[i].weather[0].icon;
                    var iconImage = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';

                    restHTML = '<div class="col card" style="width: 18rem;">';
                    restHTML += '<div class="card-header">';
                    restHTML += date;
                    restHTML += '</div>';
                    restHTML += '<ul class="list-group list-group-flush"></ul>';
                    restHTML += '<li class="list-group-item">' + temp +'°F<span><img alt="weather icon" src=' + iconImage + '></span></li>';
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
        }
        //add event handler at the end of marker drag -- get coordinates, then feed those coordinates to generate new cards
        marker.on('dragend', onDragEnd);

        //geocoder -- form to input location
        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        // once a location is typed, place the new location on the map
        var newResult = document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
        console.log(newResult);


        var searchBox = $('.mapboxgl-ctrl-geocoder--input');
        // console.log(searchBox);
        // searchBox.css('background-color', 'yellow');

    // update the weather cards when a new location is entered
    searchBox.keyup(function () {
        // console.log(searchBox[0].value);
        var typedInput = searchBox[0].value;
        console.log(typedInput);
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
                "APPID": OWM_KEY,
                "q": typedInput,
                "units": "imperial"
            }).done(function(data) {
                console.log(data);
                $('#forecast').empty();
                currentCityForecastHTML();
                //weather cards/5-day forecast for current city
                function currentCityForecastHTML(city) {
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
                }

            }).fail(function(errors) {
                console.error(errors);
            });
        });


    });

})();
