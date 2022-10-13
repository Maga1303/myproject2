import React, {useState} from "react";
import Logo from "../assets/1.png";
import { Link } from "react-router-dom";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import '../pages/styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggLenavbar = () =>{
        setOpenLinks (!openLinks);
    };  

    return (
        <div className="navbar">
            <div className="LeftSide" id={openLinks ? "open" : "close"}></div>
            <img src={Logo} id="ok" />
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="RightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggLenavbar}>
                    <AccessibilityNewIcon />
                </button>
            </div>
        </div>
    )
}
export default Navbar;
