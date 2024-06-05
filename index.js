function getValueInText(){
    let inputData = document.getElementById("address").value;
    alert(inputData);
}

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 10
};

var map = new kakao.maps.Map(container, options);