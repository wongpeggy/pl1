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
            lat: 22.3497609255,
            lng: 114.1939888133
        },
        {
            lat: 22.3555093106,
            lng: 114.1988428342
        },
        {
            lat: 22.3528634882,
            lng: 114.1869495970
        },
        {
            lat: 22.3523096096,
            lng: 114.1849627106
        },
        {
            lat: 22.3507957614,
            lng: 114.1817620690
        },
        {
            lat: 22.3449293569,
            lng: 114.1843613124
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
