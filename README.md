
-------------------------------------------------------------------------------------------------------------------------------------------

# React 내용정리
    
실시간으로 코딩 한 소스들 확인하는 법

Terminal에서 NewTerminal클릭 한 후 밑에 입력창에 npm start 입력한다

### state

state 변수로 저장하고 사용할 시 변경된 점이 있다면 자동 렌더링이 된다 마치 Ajax처럼 스무스하게 홈페이지 이동이 가능하다 
<Array, Object state데이터 수정 방법>

ex) 

    `let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '다모토리']);`

- 일단 변경함수 써야함 ex)글제목변경
- 변경함수(대체할 데이터)

state는 직접 건들지말고 deep copy해서 그걸 건드려야함

ex)	

    `var newArray = [...글제목];   ([...] 신문법임 그냥 '글제목'카피하면 값공유만 하게됨)
        newArray[0] = '여자코트 추천';
        글제목변경( newArray );`

#### 순서정리

1. 일단 기존 state카피본 만들고
2. 카피본에 수정사항 반영하고
3. 변경함수()에 집어넣기


### Component 사용법과 유의사항

사용법

해당 태그를 '사용자 지정'함수로 묶어 사용가능 (App() 태그 밖에다 만든다. App()도 하나의 펑션이기 때문이다)

ex)

      function Modal(){
      return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
          </div>
        )
      }
      
      
#### 유의사항

1. 이름은 대문자로 시작
2. return() 안에 있는건 태그하나로 묶어여함
3. 반복출현하는 HTML덩어리들, 자주 변경되는 HTML UI들, 다른페이지 만들 때 이와 같을 때 Component로 만드는게 좋다
4. 상위 component에서 만든 state를 쓰려면 props 문법 이용해야함


### React에서 클릭시 등장하는 UI만드는법

- UI가 보임/안보임 정보를 state로 저장해둠
- if문을 이용해 state가 true일 때 UI를 보여줌


### map()함수 사용법

     `var array = [2,3,4];

      var newArray = array.map(function(a,i){
        return a * 2
      });`


결과값 [4,6,8]이 나오게 된다 파라미터 a가 array안에 값들이다(반복문이랑 유사) i는 값들의 인덱스 값이다 0,1,2


### 파일 쪼갤 때 활용하는 import / export

#### 내보내기 : export default 변수명

ex) 

    var name = "Kim";
    export default name


#### 가져오기 : import 변수명 from 경로

ex) 

    import name from './data.js';  
    
#### 내보낼 변수가 많다면?! 

ex)
 
    var name = "Kim";
    var name2 = "Kim2";

    export {name, name2}
    import {name, name2} from './data.js';
        

