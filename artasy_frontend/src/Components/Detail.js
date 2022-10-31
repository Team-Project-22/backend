import "../assets/css/noscript.css"
import "../assets/css/main.css"
import React from 'react';
import Rating from "./rating";

import { useParams } from "react-router-dom";
import db from "../db/sample_data.json"

function Detail() {

    const sizeText = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
        paddingLeft: "190px",
        paddingRight: "250px",
        
    }
    const top = {
        paddingTop: "170px",
        fontSize: "35px"
        
    }
    const font ={
        fontSize: "20px"
    }
    const ComponentBox = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
        paddingTop: "30px",
        paddingLeft: "100px",
        paddingRight: "0px",
        width: "80%"
    }

    const { Obj_ID } = useParams();
    console.log({Obj_ID});
    const new_db = db.filter((db) => db.Obj_ID === Number(Obj_ID));

    if (db.lenth === 0) {
        return(
            <div>
                <h3>존재하지 않는 작품입니다.</h3>
            </div>
        )
    }

    return(
            <div id="main" className="wrapper style0">
                <header className="major">
                    <h2>Explain</h2>
                </header>
                    {new_db.map(db => (
                        <div className="row gtr-150">
                            <div className="col-7 col-12-medium">
                                <section id="content" style={ComponentBox}>
                                    <a className="image fit"><img src={db.Img_file}/></a>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section id="sidebar">
                                    <section>
                                        <h3 className="align-center" style={top}>{db.Title}</h3>
                                        <h3 className="align-center" style={font}>{db.Dimensions}</h3>
                                        <h3 className="align-center" style={font}>{db.Mediums}  {db.Obj_dates}</h3>
                                        <h3 className="align-center"><Rating></Rating></h3> 
                                        {/* &nbsp; 
                                        <div className="row.gtr-050">
                                            <p style={sizeText}>김환기는 미국으로 건너간 0963년부터 작고한 0974년 이르는 뉴욕시대를 통해 0950년 후반부터 산, 달, 강, 새, 나무 등이 있는 자연 풍경을 순수한 점, 선, 면의 조형적 요소로써 내밀한 서정의 새계로 심화시켰습니다.</p>
                                            <p style={sizeText}>0968년 0월 23일 작가의 일기에 "날으는 점, 점들이 모여 형태를 상징하는 그런 것들을 시도하다."라고 적혀 있습니다. 이러한 점 모티브는 뉴욕시대에 행해진 과슈와 콜라주 그리고 파피에 마쉐, 오브제, 종이에 유채, 드로잉 등과 같이
                                                재료와 양식의 범주를 자유롭게 넘나들었던 다양한 조형실험을 거쳐 70년대에 들어서면서 화면 전체를 덮는 전면점화로 발전됩니다.	
                                            </p>
                                        </div> */}
                                    </section>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
    )
}

export default Detail;