/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

import React from "react";
// import { Link } from "react-router-dom";

import Logo from '../images/logo.png'



const Header = () =>{
    return(
        <header className="header">
            
            <span className="logo"><img alt='Logo' src={Logo} /> <h2>StartupLanding</h2></span>
            
            <nav className="navbar">
                <a href="#home" >Home</a>
                <a href="#quality" >Advertise</a>
                <a href="#agency" >Developers</a>
                <a href="#support" >Support</a>
                <a href="#blog" >Blog</a>
                {/* <Link to="#contact" >Contact</Link>
                <Link to="#about" >About Us</Link> */}
            </nav>

        
            <div className="signup">
                <a href="#blog" >Register Now</a>
            </div>
            <span onClick={ (e)=>{ e.target.classList.toggle("fa-times"); document.querySelector(".navbar").classList.toggle("active")} } className="bars fa fa-bars"></span>
        </header>
    )
}

export default Header