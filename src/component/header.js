import React from "react";
import { Link } from "react-router-dom";

import Logo from '../images/logo.png'


const Header = () =>{
    return(
        <header className="header">

            <span className="logo"><img alt='Logo' src={Logo} /> <h2>StartupLanding</h2></span>
            
            <nav className="navbar">
                <Link to="/" >Home</Link>
                <Link to="/" >Advertise</Link>
                <Link to="/" >Supports</Link>
                <Link to="/" >Contact</Link>
                <Link to="/" >About Us</Link>
            </nav>

            <div className="signup">
                <Link to='/'>Register Now</Link>
            </div>
        </header>
    )
}

export default Header