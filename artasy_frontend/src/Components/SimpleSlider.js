import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/art1.png";
import img2 from "./img/art2.png";
import img3 from "./img/art3.png";
import db from "../db/sample_data.json"
import { Nav } from "react-bootstrap";

function SimpleSlider() {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    // const a = setInterval(function() {
    //     rand(0, 20);
    // }, 3000);

    const a = rand(0, 20);

    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      autoplay: true,
      centerPadding: "0px",
      slidesToShow: 1,
      slidesToScroll: 1,

    responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 960, //화면 사이즈 960px일 때
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:3 
            } 
        },
        { 
            breakpoint: 768, //화면 사이즈 768px일 때
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:2 
            } 
        }
        ]
    };

    const ComponentBox = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
        width: "50%"
    }

    return (
        <div className="container">
            <div>
                <header className="align-center">
                    <h1></h1>
                    <h2>Weekly Recommend</h2>
                    <p>Start Weekly Art with Artasy</p>
                </header>
            </div>
            <div key={db[0].Obj_ID}>
                <Slider {...settings}>
                    <Nav.Link href={'detail/'+db[a].Obj_ID}>
                        <img src={db[a].Img_file} width="40%"/>
                    </Nav.Link>
                    <Nav.Link href={'detail/'+db[a+1].Obj_ID}>
                        <img src={db[a+1].Img_file} width="60%"/>
                    </Nav.Link>
                    <Nav.Link href={'detail/'+db[a+2].Obj_ID}>
                        <img src={db[a+2].Img_file} width="60%" />
                    </Nav.Link>
                    <Nav.Link href={'detail/'+db[a+3].Obj_ID}>
                        <img src={db[a+3].Img_file} width="60%"/>
                    </Nav.Link>
                    <Nav.Link href={'detail/'+db[a+4].Obj_ID}>
                        <img src={db[a+4].Img_file} width="60%" />
                    </Nav.Link>
                </Slider>
            </div>
        </div>
    )
};

export default SimpleSlider;