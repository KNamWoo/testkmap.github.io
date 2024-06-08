let search_arr = [];

function placeSearchCB(data, status, pagination){
    if(status === kakao.maps.services.Status.OK){
        let target = data[0];
        console.log(target);
        const lat = target.y;
        const lng = target.x;
        const latlng = new naver.maps.LatLng(lat, lng);
        marker = new naver.maps.Marker({
            position: latlng,
            map: map
        })
        if(search_arr.length == 0){
            search_arr.push(marker);
        }else{
            search_arr.push(marker);
            let pre_marker = search_arr.splice(0, 1);//이전 검색된 마커 추출
            //pre_marker[0].setMap(null);//이전 마커 지우기
        }
        //map.setZoom(14, false);
        map.panTo(latlng);
    }else{
        alert("결과 없음");
    }
}