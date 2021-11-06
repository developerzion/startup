/* ============================================
    Github: github.com/developerzion
    Linkedin: linkedin.com/in/developerzion
    Mail: devparse.official@gmail.com
    Author: Moses Samuel Zion
    Website: www.devparse.com 
============================================ */

import React from "react";
import 'animate.css';

//Import Component
import Header from '../component/header'

//Import Images
import banner from '../images/banner.png'
import sponsor from '../images/sponsor.png'
import frame from '../images/Frame.png'
import frame1 from '../images/Frame1.png'
import frame2 from '../images/Frame2.png'
import frame3 from '../images/Frame3.png'
import agency from '../images/agency.png'
import user1 from '../images/user1.jfif'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jfif'
import user4 from '../images/user4.jpg'
import support from '../images/support.png'
import tutorial1 from '../images/tutorial1.png'
import tutorial2 from '../images/tutorial2.png'
import tutorial3 from '../images/tutorial3.png'
import comment from '../images/comment.png'

//Home Component
const Home =()=>{
    return (
        <div>
            <Header/>
            <section id="home" className="home">
                <div className="home-wrapper">
                    <div className="section-one">
                        <h1 className="animate__animated animate__shakeX">Great software is built with amazing developers</h1>
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
                <div className="quality-header animate">
                    <h5>Quality Features</h5>
                    <h2>Meet exciting feature of app</h2>
                </div>
                
                <div className="frame animate">
                    <div className="box">
                        <img alt="frame" src={frame} />
                        <h5>Unlimited Customization</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame 1" src={frame1} />
                        <h5>Vector shape & resizable</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame 2" src={frame2} />
                        <h5>Editing freedom</h5>
                        <p>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="box">
                        <img alt="frame 3" src={frame3} />
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
                        <span className="agent-span">Create custom landing pages with Shades that convert more visitors than any website, no coding required.</span>
                        <p><span className="stylefont fa fa-check"></span> Unlimited design possibility</p>
                        <p><span className="stylefont fa fa-check"></span> Completely responsive features</p>
                        <p><span className="stylefont fa fa-check"></span> Easy to customize plugins</p>
                        <a href="#home" className="learn">Learn more <span className="fa fa-angle-right"></span></a>
                    </div>
                    
                </div>
            </section>  

            <section id="trust" className="trust">                
                <div className="trust-header">   
                    <div className="box">
                        <h1>Leading companies trust us to develop software</h1>
                        <p>We believe it’s important for everyone to have access to software especially when it comes to digital learning be navigate.</p>
                        <a href="#home" className="explore">Explore details <span className="fa fa-angle-right"></span></a>
                    </div>                
                </div>
                <div className="overlay">
                    <div className="play-btn">
                        <a href="https://www.youtube.com/watch?v=jQLht1t_1QE"><i className="fa fa-play-circle"></i></a>
                    </div> 
                </div>                   
                
            </section> 

            <section id="comments" className="comments">                
                <div className="comment-wrapper">                   
                    <h4>Our Team</h4>  
                    <h1>Why customers love us</h1>
                    <p className="comment-p">They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again</p>
                    
                    <div className="comment">
                        <div className="box">
                            <img alt="comment1" src={user1} />
                            <div className="text">
                                <h3>Pierre Hackett</h3>
                                <p>VP of Engineering</p>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="comment1" src={user2} />
                            <div className="text">
                                <h3>Moses Samuel</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="comment1" src={user3} />
                            <div className="text">
                                <h3>Ece Akman</h3>
                                <p>Senior Marketer</p>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="comment1" src={user4} />
                            <div className="text">
                                <h3>Ece Akman</h3>
                                <p>Senior Marketer</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>  
            <section id="support" className="support">                
                <div className="support-wrapper">                    
                    <div className="box box-resize">
                        <h1>Free Customer Support to ensure what you like to expect</h1>
                        <span>We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.</span>
                        <p>If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.</p>
                        <a href="#home" className="learn">Learn more <span className="fa fa-angle-right"></span></a>
                    </div>
                    <div className="box">
                        <img src={support} alt="support" />
                    </div>
                    
                </div>
            </section> 
            <section id="blog" className="tutorial">                
                <div className="tutorial-wrapper">                   
                    <h4>Quality features</h4>  
                    <h1>Tutorials that people love most</h1>
                    
                    <div className="tutorial-box">
                        <div className="box">
                            <img className="box-tut" src={tutorial1} alt="tutorial1" />
                            <h3>How to work with prototype design with adobe xd featuring tools</h3>
                            <p><img className="commentIcon" width="20" src={comment} alt="Comment-icon" /> 22 Comments</p>
                        </div>
                        <div className="box">
                            <img className="box-tut" src={tutorial2} alt="tutorial1" />
                            <h3>Create multiple artboard by using figma prototyping development</h3>
                            <p><img className="commentIcon" width="20" src={comment} alt="Comment-icon" /> 15 Comments</p>
                        </div>
                        <div className="box">
                            <img className="box-tut" src={tutorial3} alt="tutorial1" />
                            <h3>Convert your web layout theming easily with sketch zeplin extension</h3>
                            <p><img className="commentIcon" width="20" src={comment} alt="Comment-icon" /> 18 Comments</p>
                        </div>
                    </div>
                    
                    {/* <img className="ticket" src={ticket} alt="ticket" /> */}
                </div>
            </section>

            <section id="tickets" className="tickets">
                <div className="tickets-wrapper">
                    <div className="ticket">
                        <h1>Hire the world’s best developers and designers around!</h1>
                        <a href="https://api.whatsapp.com/send/?phone=2347036195368&text=Hello+Sam&app_absent=0">HIRE DEVELOPERS</a>
                    </div>
                   
                </div>
            </section>

            <section id="footer" className="footer">
                <div className="footer-wrapper">
                    <div className="box-text">
                        <span>Copyright by { new Date().getFullYear() } Redq, Inc. Developed by: <a href="https://developerzion.netlify.app/">Developerzion</a> </span>
                    </div>
                    
                    <div className="box-nav">
                        <a href="#home" >Home</a>
                        <a href="#quality" >Advertise</a>
                        <a href="#agency" >Developers</a>
                        <a href="#support" >Support</a>
                        <a href="#blog" >Blog</a>
                    </div>
                </div>

            </section>

        </div>
        
    )
}


export default Home