import React from "react";
import { Link } from "react-router-dom";

import Logo from '../images/logo.png'


const Header = () =>{
    return(
        <header className="header">
            
            <span className="logo"><img alt='Logo' src={Logo} /> <h2>StartupLanding</h2></span>
            
            <nav className="navbar">
                <Link to="#home" >Home</Link>
                <Link to="#advertise" >Advertise</Link>
                <Link to="#support" >Supports</Link>
                <Link to="#contact" >Contact</Link>
                <Link to="#about" >About Us</Link>
            </nav>

        
            <div className="signup">
                <Link to='#register'>Register Now</Link>
            </div>
            <span className="bars fa fa-bars"></span>
        </header>
    )
}

export default Header