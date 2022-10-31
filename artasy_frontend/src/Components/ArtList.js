import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import db from "../db/sample_data.json"

function ArtList(props) {
    const ComponentBox = {
        display: "flex",
        justifyContent: "center",
        aligndbs: "center",
    }

    return(
        <div class="container">
					<header className="major">
						<h2>ART</h2>
					</header>
                    <section>
                        <h3>Art collections</h3>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                {props.db.map((item, index) => {
                                    return(
                                            <div className="col-4 col-6-xsmall" key={item.Obj_ID}>
                                                <Nav.Link href={'detail/'+item.Obj_ID} style={ComponentBox}>
                                                    <img src={item.Img_file} width="90%" />
                                                </Nav.Link>
                                                <h4>key: {item.Obj_ID}</h4>
                                                <h4>Obj_ID : {item.Obj_ID}</h4>
                                                <h4>{item.Title}</h4>
                                                <h4>{item.Obj_dates}</h4>
                                                <h4>{item.Dimensions}</h4>
                                                <h4>{item.Mediums}</h4>
                                            </div>
                                    );
                                })};
                            </div>
                        </div>
					</section>
                </div>
    );
};

export default ArtList;