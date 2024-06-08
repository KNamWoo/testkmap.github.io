# *-- Directions 5 활용 코드 --*
option = ''
# option : 탐색옵션 [최대 3개, traoptimal(기본 옵션) 
# / trafast, tracomfort, traavoidtoll, traavoidcaronly]

def get_optimal_route(start, goal, waypoints=waypoint, option=option ) :
    # waypoint는 최대 5개까지 입력 가능, 
    # 구분자로 |(pipe char) 사용하면 됨(x,y 좌표값으로 넣을 것)
    # waypoint 옵션을 다수 사용할 경우, 아래 함수 포맷을 바꿔서 사용 
    client_id = 'kf1tb4xvjj'
    client_secret = 'Gf5jTFUgJaOElLVWJXoCgJAancFO7n9nYvAqnKAe' 
    # start=/goal=/(waypoint=)/(option=) 순으로 request parameter 지정
    url = f"https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving? \
    start={start[0]},{start[1]}&goal={goal[0]},{goal[1]}\
    &waypoints={waypoint[0]},{waypoint[1]}&option={option}"
    request = urllib.request.Request(url)
    request.add_header('X-NCP-APIGW-API-KEY-ID', client_id)
    request.add_header('X-NCP-APIGW-API-KEY', client_secret)
    
    response = urllib.request.urlopen(request)
    res = response.getcode()
    
    if (res == 200) :
        response_body = response.read().decode('utf-8')
        return json.loads(response_body)
            
    else :
        print('ERROR')
        
get_optimal_route(start, goal, option=option)