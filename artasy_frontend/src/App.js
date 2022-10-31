/* eslint-disable */ 

// import Register from './Components/register';

import logo from './logo.svg';
import { useState} from 'react';
import Home from "./Components/Main";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Gallery from './Components/Gallary';
import Login from './Components/login';
import Detail from "./Components/Detail";
import About from "./Components/About";
import Rating from './Components/rating';
import Profile from './Components/Profile';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import React, {useEffect} from 'react'
import axios from 'axios';

import "./assets/css/noscript.css";
import "./assets/css/main.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import img_logo from "./images/logo.png";
import db from "./db/sample_data.json";


function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path="/" exact={true} element={<Home />}/>
          <Route path="gallery" exact={true} element={<Gallery db={db} />} />
          <Route path="gallery" exact={true} element={<Gallery />} />
          <Route path="about" exact={true} element={<About />} />
          <Route path="login" exact={true} element={<LoginPage />} />
          <Route path="register" exact={true} element={<RegisterPage />} /> 
          <Route path="/detail/:Obj_ID" element={<Detail db={db}/>}/>
          <Route path="profile" exact={true} element={<Profile />} /> 
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
};

export default App;

// function App() {

//   let post = '강남 우동 맛집';
//   let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
//   let [like, likechange] = useState(0);
    
//   return (
//     <div className="App">
//       <div className="balck-nav">
//         <h4> 블로그임</h4>
//       </div>

//       <button onClick={() => {
//         let copy = [...글제목];
//         copy[0] = '여자코트 추천'
//         글제목변경(copy);
//       }}>글 수정</button>

//       <div className="list">
//         <h4>{ 글제목[0] } <span onClick={()=>{ likechange(like+=1) }}>👍</span> {like} </h4>
//         <p>2월 17일 발행</p>
//       </div>


//       <div className="list">
//         <h4>{ 글제목[1] }</h4>
//         <p>2월 17일 발행</p>
//       </div>
//       <div className="list">
//         <h4>{ 글제목[2] }</h4>
//         <p>2월 17일 발행</p>
//       </div>
      
//       <Modal></Modal>
//     </div>
//   );
// } 

// function Modal(){
//   return(
//     <div className='modal'>
//         <h4>제목</h4>
//         <p>날짜</p>
//         <p>상세내용</p>
//     </div>
//   )
// }
