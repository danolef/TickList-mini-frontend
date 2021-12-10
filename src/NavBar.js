import { Link } from "react-router-dom";

function NavBar() {

    return (
    <nav className="navbar" id="sidebar">
            {/* <a className="navbar-brand" href="#">Tick List</a> */}
            <Link styles={{color: '204, 85, 0', textDecoration: "none" }}class="link" to="/">Home</Link>
            <Link class="link" to="/tickList">Tick List</Link>
            <Link class="linkLast" to="/climbs">Climbs</Link>   
    </nav>
    ) 
}

export default NavBar;