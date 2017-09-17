function myMap1() {
    var myLatLng = {
        lat: 33.4481966,
        lng: -112.0752215
    };
    var myLatLng2 = {
        lat: 32.7084971,
        lng: -117.1574689
    };

    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'John Smith'
    });

    var map = new google.maps.Map(document.getElementById("map1"), map);
    map.setMapTypeId('hybrid');

    $("#show-map1").click(function() {
        map.setCenter(new google.maps.LatLng(33.4481966, -112.0752215));
    });

    $("#show-map2").click(function() {
        map.setCenter(new google.maps.LatLng(32.7084971, -117.1574689));
        var marker2 = new google.maps.Marker({
            position: myLatLng2,
            map: map,
            title: 'Jane Smith'
        });
    });
}

function setClickHandler(id, fn) {
    document.getElementById(id).onclick = fn;
}

setClickHandler('remote-image1', function(e) {
    e.target.tagName === 'IMG' && BigPicture({
        el: e.target,
        imgSrc: e.target.src.replace()
    });
});

setClickHandler('remote-image2', function(e) {
    e.target.tagName === 'IMG' && BigPicture({
        el: e.target,
        imgSrc: e.target.src.replace()
    });
});

setClickHandler('remote-image3', function(e) {
    e.target.tagName === 'IMG' && BigPicture({
        el: e.target,
        imgSrc: e.target.src.replace()
    });
});

setClickHandler('remote-image4', function(e) {
    e.target.tagName === 'IMG' && BigPicture({
        el: e.target,
        imgSrc: e.target.src.replace()
    });
});

function back_onclick() {
    window.location.href = "https://alecjpav.github.io/AutoViato/listing-table.html";
}

function confirm_onclick() {
    window.location.href = "https://alecjpav.github.io/AutoViato/confirmation-shipper.html";
}