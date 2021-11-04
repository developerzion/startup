import React from "react";
import { Link } from "react-router-dom";

import Header from '../component/header'
import banner from '../images/banner.png'
import sponsor from '../images/sponsor.png'
import frame from '../images/Frame.png'
import frame1 from '../images/Frame1.png'
import frame2 from '../images/Frame2.png'
import frame3 from '../images/Frame3.png'
import agency from '../images/agency.png'

const Home =()=>{
    return (
        <div>
            <Header/>
            <section id="home" className="home">
                <div className="home-wrapper">
                    <div className="section-one">
                        <h1>Great software is <br/> built with amazing developers</h1>
                        <p>We help build and manage a team of world-class developers to bring your vision to life</p>

                        <form className="search-form">
                            <input className="search-field" placeholder="Subscribe newsletter" />
                            <button className="subscribe">Subscribe</button>
                        </form>

                        <span className="sponsor"><img src={sponsor} alt="sponsor" /></span>
                    </div>
                    <div className="section-two">
                        <img alt="banner" src={banner} />
                    </div>
                </div>
            </section>   

            <section id="quality" className="quality">
                <div className="quality-header">
                    <h5>Quality Features</h5>
                    <h2>Meet exciting feature of app</h2>
                </div>
                
                <div className="frame">
                    <div className="box">
                        <img alt="frame1" src={frame} />
                        <h5>Unlimited Customization</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame1" src={frame1} />
                        <h5>Vector shape & resizable</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame1" src={frame2} />
                        <h5>Editing freedom</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame1" src={frame3} />
                        <h5>Best Award history</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>

            </section>

            <section id="agency" className="agency">                
                <div className="agency-wrapper">
                    <div className="box">
                        <img src={agency} alt="Agency" />
                    </div>
                    <div className="box box-resize">
                        <h1>Boost your agencies by choosing Ninja Developers</h1>
                        <span>Create custom landing pages with Shades that convert more visitors than any website, no coding required.</span>
                        <p><span className="stylefont fa fa-check"></span> Unlimited design possibility</p>
                        <p><span className="stylefont fa fa-check"></span> Completely responsive features</p>
                        <p><span className="stylefont fa fa-check"></span> Easy to customize plugins</p>
                        <Link to="/" className="learn">Learn more <span className="fa fa-angle-right"></span></Link>
                    </div>
                    
                </div>
            </section>  

            <section id="trust" className="trust">                
                <div className="trust-header">                   
                    <h1>Leading companies trust us to develop software</h1>
                    <p>We believe it’s important for everyone to have access to software especially when it comes to digital learning be navigate.</p>
                    <Link className="explore">Explore details <span className="fa fa-angle-right"></span></Link>
                </div>
            </section>      
        </div>
        
    )
}

export default Home