//             Map => js
function initMap(lated, lnged) { // lat, lng
    lated = lated === undefined ? 33.312805 : parseFloat(lated); // 33.312805
    lnged = lnged === undefined ? 44.361488 : parseFloat(lnged); // 44.361488

    // The location of Uluru
    var uluru = {
        lat: lated,
        lng: lnged
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
//            End Map => js


// Select data in details page
$(document).ready(function () {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    var settings = {
        "url": "getItem.php",
        "method": "POST",
        "timeout": 30,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "id": id
        }
    };
    //       Show card details
    $.ajax(settings).done(function (response) {
        var res = JSON.parse(response);
        $('#nameprodect').text(res.data.name_prodect);
        $('#price').text(res.data.price);
        initMap(res.data.latitude, res.data.longitude);
    });
    //      End Show card details


});
//  End Select data in details page