function initMap() {
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
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    const locations = [{
            lat: 22.34976092551239,
            lng: 114.19398881331269
        },
        {
            lat: 22.35541287263063,
            lng: 114.19939732649837
        },
        {
            lat: 22.35286348821508,
            lng: 114.18694959705897
        },
        {
            lat: 22.35230960968253,
            lng: 114.18496271066765
        },
        {
            lat: 22.35079576142382,
            lng: 114.18176206902695
        },
        {
            lat: 22.34492935698997,
            lng: 114.18436131244802
        }
    ];
    const labels = "123456789";
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            map,
            label: {
                text: labels[i % labels.length],
                color: "white"
            }
        });
    });
    const infowindow = new google.maps.InfoWindow({
        content: "<img src='fat-jong-temple.jpg'><p>Temple Hill Fat Jong Temple</p>",
        maxWidth: 130,
    });
    for (const marker of markers) {
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false
            });
        });
    }
}

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