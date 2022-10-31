import art1 from "./img/art1.png"
import art2 from "./img/art2.png"
import art3 from "./img/art3.png"
import art4 from "./img/art4.png"
import art5 from "./img/art5.png"
import art6 from "./img/art6.png"
import Art from "./Detail"
import ArtList from "./ArtList"

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react"
import data from "../db/sample_data.json"

function Gallery () {
    const [db, setArt] = useState(data);

    return(
        <div>
            <div id="main" className="wrapper style1">
                <ArtList db={db}></ArtList>
            </div>
        </div>
    );
}

export default Gallery;