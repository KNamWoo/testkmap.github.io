var infowindow = new kakao.maps.Infowindow({zIndex:1});

function search(){
    var ps = new kakao.maps.services.Places();
    var input = document.getElementById('keyword').value;
    ps.keywordSearch(input, placesSearchCB);
}

function placesSearchCB(data, status, pagination){
    if(status === kakao.maps.services.Status.OK){
        var bounds = new kakao.maps.LatLngBounds();

        for(var i=0; i<data.length; i++){
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
    }
}

function displayMarker(place){
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
    });

    kakao.maps.event.addListener(marker, 'click', function(){
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
