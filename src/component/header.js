/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

import React from "react";

//Import Image
import Logo from '../images/logo.png'

//Functions
function closeBar(){
    var element = document.querySelector(".navbar");
    element.classList.remove("active");
    document.querySelector("#bars").classList.toggle("fa-times")
}


//Header Component
const Header = () =>{
    
    return(
        <header className="header">
            
            <span className="logo"><img alt='Logo' src={Logo} /> <h2>PurpleFlame</h2></span>
            
            <nav className="navbar">
                <a onClick={ ()=> closeBar() } href="#home" >Home</a>
                <a onClick={ ()=> closeBar() } href="#quality" >Advertise</a>
                <a onClick={ ()=> closeBar() } href="#agency" >Developers</a>
                <a onClick={ ()=> closeBar() } href="#support" >Support</a>
                <a onClick={ ()=> closeBar() } href="#blog" >Blog</a>

                <form className="mobile-search-form">
                    <input className="mobile-search-field" placeholder="Search ..." />
                    <button className="mobile-subscribe"><span className="fa fa-search"></span></button>
                </form>
            </nav>
        
            <div className="signup">
                <a href="#blog" >Register Now</a>
            </div>
            <span id="bars" onClick={ (e)=>{ e.target.classList.toggle("fa-times"); document.querySelector(".navbar").classList.toggle("active")} } className="bars fa fa-bars"></span>
        </header>
    )
}


export default Header