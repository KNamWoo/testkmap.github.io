function placeSearchCB(data, status, pagination){
    if(status === kakao.maps.services.Status.OK){
        let target = data;
        console.log(target);
    }else{
        alert("결과 없음");
    }
}