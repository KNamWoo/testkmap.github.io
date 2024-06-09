async function getCarDirection() {
    const REST_API_KEY = '791e26df301203af6b602a9ae1394744';
    // 호출방식의 URL을 입력합니다.
    const url = 'https://apis-navi.kakaomobility.com/v1/directions';

   // 출발지(origin), 목적지(destination)의 좌표를 문자열로 변환합니다.
    const origin = `${pointObj.startPoint.lng},${pointObj.startPoint.lat}`; 
    const destination = `${pointObj.endPoint.lng},${pointObj.endPoint.lat}`;
    
    // 요청 헤더를 추가합니다.
    const headers = {
      Authorization: `KakaoAK ${REST_API_KEY}`,
      'Content-Type': 'application/json'
    };
  
    // 표3의 요청 파라미터에 필수값을 적어줍니다.
    const queryParams = new URLSearchParams({
      origin: origin,
      destination: destination
    });
    
    const requestUrl = `${url}?${queryParams}`; // 파라미터까지 포함된 전체 URL

    try {
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    const data = await response.json();//데이터 받기
      
    console.log(data)
    } catch (error) {
      console.error('Error:', error);
    }

    const linePath = [];

    data.routes[0].sections[0].roads.forEach(router => {
        router.vertexes.forEach((vertex, index) => {
        // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
        // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
        if (index % 2 === 0) {
            linePath.push(new kakao.maps.LatLng(router.vertexes[index + 1], router.vertexes[index]));
        }
        });
    });
    var polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: '#000000',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
    }); 
    polyline.setMap(map);
}