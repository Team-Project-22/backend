import {Link} from "react-router-dom";
import Home from "./Main";
import Gallery from "./Gallary";
import About from "./About";
import Profile from "./Profile";
import Login from "./login";
import Footer from "./Footer";


// 상단 메뉴바
function Header() {
    return(
		<div>
			<header id="header">
				<h1 id="logo"><Link to="/">Artasy</Link></h1>
				<nav id="nav">
					<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/gallery">ART</Link></li>
					<li><Link to="gallery">ARTIST</Link></li>
					<li><Link to="/about">ABOUT</Link></li>
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="login"><a className="button primary">Log In</a></Link></li>
					</ul>
				</nav>
			</header>
		</div>
    );
  };

  export default Header;