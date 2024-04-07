function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function initMap() {
    var options = {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    window.directionsService = new google.maps.DirectionsService();
    window.directionsRenderer = new google.maps.DirectionsRenderer();
    window.directionsRenderer.setMap(map);
}

function calculateRoute() {
    var startLocation = document.getElementById('start-location').value;
    if (startLocation === '') {
        alert('Please enter a starting location.');
        return;
    }
    window.directionsService.route({
        origin: startLocation,
        destination: 'KFC Location',
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            window.directionsRenderer.setDirections(response);
        } else {
            alert('Directions request failed due to ' + status);
        }
    });
}
