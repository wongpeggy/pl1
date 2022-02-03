// File Name: story.js
// Author: Peggy Wong
// Date Created: Feb 01, 2022
// Date Modified: Feb 02, 2022
function initMap() {
    // Create a new map and hide the labels of point of interest
    // Reference: https://developers.google.com/maps/documentation/javascript/reference/map#Map
    // Example: https://developers.google.com/maps/documentation/javascript/examples/map-simple
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 22.3523,
            lng: 114.1870
        },
        zoom: 15,
        styles: [{
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }]
    });
    // Create a new instance of a DirectionsService to send directions queries to Google servers
    // Reference: https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
    const directionsService = new google.maps.DirectionsService();
    // Create DirectionsRenderer with the option of suppressing direction markers
    // Reference: https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    // Call setMap() on the renderer to bind it to the passed map
    // Reference: https://developers.google.com/maps/documentation/javascript/directions#DisplayingResults
    directionsRenderer.setMap(map);
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    // Create a constant for marker labels
    const labels = "123456789";
    // Create a constant array for markers
    const markerinfo = [{
            lat: 22.3497609255,
            lng: 114.1939888133,
            info: "<img src='img/fat_jong_temple.jpg'><p>Temple Hill Fat Jong Temple</p>"
        },
        {
            lat: 22.3555093106,
            lng: 114.1988428342,
            info: "<img src='img/lion_rock_country_park_entrance.jpg'><p>Lion Rock Country Park Entrance</p>"
        },
        {
            lat: 22.3528634882,
            lng: 114.1869495970,
            info: "<img src='img/lion_rock_peak.jpg'><p>Lion Rock Peak</p>"
        },
        {
            lat: 22.3523096096,
            lng: 114.1849627106,
            info: "<img src='img/lion_rock_head.jpg'><p>Lion Rock Head</p>"
        },
        {
            lat: 22.3507957614,
            lng: 114.1817620690,
            info: "<img src='img/wind_and_rain_pavilion.jpg'><p>Wind and Rain Pavilion.jpg</p>"
        },
        {
            lat: 22.3449293569,
            lng: 114.1843613124,
            info: "<img src='img/lion_rock_park.jpg'><p>Lion Rock Park.jpg</p>"
        }
    ];
    // Create markers using the constants of marker labels and locations
    // Reference: https://developers.google.com/maps/documentation/javascript/reference/marker#Marker
    // Example: https://github.com/FlemingGeom/googlemaps-shawnmflemingc/blob/main/clustering/clustering.js
    // Example: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
    // Example: https://developers.google.com/maps/documentation/javascript/examples/marker-labels
    const markers = markerinfo.map((location, i) => {
        const marker = new google.maps.Marker({
            position: location,
            map,
            label: {
                text: labels[i % labels.length],
                color: "white"
            }
        });
        const infowindow = new google.maps.InfoWindow({
            content: markerinfo.info,
            maxWidth: 130
        });
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false
            });
        });
    });
}

// Define the function to calculate and display route
// Reference: https://developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
// Example: https://developers.google.com/maps/documentation/javascript/examples/directions-waypoints
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
        .route({
            origin: "Temple Hill Fat Jong Temple, Shatin Pass Road, Sha Tin Pass, Hong Kong",
            destination: "Lion Rock Park, Chuk Yuen Rd, Chuk Un, Hong Kong",
            waypoints: [{
                    location: "Lion Rock Country Park Entrance, Shatin Pass Road, Sha Tin Pass, Hong Kong"
                },
                {
                    location: "Lion Rock Head, Lion Rock, Hong Kong"
                },
                {
                    location: "Wind & Rain Pavilion, Maclehose Trail Sec. 5, Lion Rock, Hong Kong"
                }
            ],
            travelMode: google.maps.TravelMode.WALKING
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}
