/*eslint-disable*/ 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '다모토리']); 
  let [날짜, 날짜변경] = useState(['2022-12-20', '2021-05-03', '2020-01-01']); 
  let [누른제목, 누른제목변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [입력값, 입력값변경] = useState('');

  function 반복된UI(){

    var 어레이 = [];

    for (var i = 0; i < 3; i++){
      어레이.push(
        <div className='list'>
              <h3>{ 글제목[i] } <span onClick={  따봉바꾸기 }>👍</span> {따봉[i]} </h3>
              <p>{날짜[i]}</p>
              <hr/>
            </div>
        );
    }
    
    
    return 어레이
  }

  
  let posts2 = {color : 'white', fontSize : '30px' };
  let posts = '강남 고기 맛집'
  // let [따봉, 따봉변경] = useState(0);
  let [따봉, 따봉변경] = useState(0);

  
  function 제목바꾸기(){
   var newArray = [...글제목];
   newArray[0] = '여자코트 추천';
   글제목변경( newArray );
  }

  // function 저장하기(props){
  //   var newArray = [...글제목];
  //   newArray.push(props);
  //   글제목변경( newArray); 
  // }

 


  return (
    <div className="App">
      <div className="black-nav">
        <div style={ posts2 }>개발 Blog</div>
      </div>
      

      

      {
        글제목.map(function(글, i){
          
          return (
            <div className='list' key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i) } } >{ 글 } <span onClick={ ()=> { 따봉변경(따봉+1) }}>👍</span> {따봉} </h3>
              <p>{날짜[0]}</p>
              <hr/>
            </div>
          )  
      })
      }
  
      {/* <button onClick={ ()=>{ 누른제목변경(0)} }>버튼1</button>
      <button onClick={ ()=>{ 누른제목변경(1)} }>버튼2</button>
      <button onClick={ ()=>{ 누른제목변경(2)} }>버튼3</button> */}

      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } ></input> */}


      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value)} }></input>
        <hr></hr>
         {/* 저장하기(입력값) 요건 내가 한 방법  */}
        <button onClick={ ()=>{ console.log('ㅎㅎ');
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        } }>저장</button>
        <hr></hr>
      </div>


      <button onClick={ ()=> {modal변경(!modal)}}>열고닫기</button>
          {
            modal === true 
            ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
            : null
          }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h2>제목 { props.글제목[props.누른제목]} </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;
