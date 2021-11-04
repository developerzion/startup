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
// import trust from '../images/trust.png'
// import play from '../images/play.png'
import comment1 from '../images/comment1.png'
import comment2 from '../images/comment2.png'
import comment3 from '../images/comment3.png'
import support from '../images/support.png'
// import tutorial1 from '../images/tutorial1.png'
// import tutorial2 from '../images/tutorial2.png'
// import tutorial3 from '../images/tutorial3.png'
// import comment from '../images/comment.png'
// import ticket from '../images/ticket.png'

// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             $(".header").removeClass("active");
//         }
//     });
// });

const Home =()=>{
    return (
        <div>
            <Header/>
            <section id="home" className="home">
                <div className="home-wrapper">
                    <div className="section-one">
                        <h1>Great software is built with amazing developers</h1>
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
                        <Link to="#home" className="learn">Learn more <span className="fa fa-angle-right"></span></Link>
                    </div>
                    
                </div>
            </section>  

            <section id="trust" className="trust">                
                <div className="trust-header">   
                    <div className="box">
                        <h1>Leading companies trust us to develop software</h1>
                        <p>We believe it’s important for everyone to have access to software especially when it comes to digital learning be navigate.</p>
                        <Link className="explore">Explore details <span className="fa fa-angle-right"></span></Link>
                    </div>                
                </div>
                {/* <div className="overlay"> 
                    <img src={ trust } alt="trust" />
                    <img className="play" src={play} alt="trust" />
                </div>                    */}
                
            </section> 

            <section id="comments" className="comments">                
                <div className="comment-wrapper">                   
                    <h4>Customer Comments</h4>  
                    <h1>Why customers love us</h1>
                    <p className="comment-p">They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again</p>
                    
                    <div className="comment">
                        <div className="box box-border">
                            <img alt="comment1" src={comment1} />
                            <div className="text">
                                <h3>Pierre Hackett</h3>
                                <p>VP of Engineering</p>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="comment1" src={comment2} />
                            <div className="text">
                                <h3>Natalia Sanz</h3>
                                <p>Head of Technology</p>
                            </div>
                        </div>
                        <div className="box">
                            <img alt="comment1" src={comment3} />
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
                        <Link to="/" className="learn">Learn more <span className="fa fa-angle-right"></span></Link>
                    </div>
                    <div className="box">
                        <img src={support} alt="support" />
                    </div>
                    
                </div>
            </section> 
            {/* <section id="tutorial" className="tutorial">                
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
                    
                    <img className="ticket" src={ticket} alt="ticket" />
                </div>
            </section> */}

            {/* <section id="tickets" className="tickets">
                <div className="tickets-wrapper">
                    <div className="ticket"></div>
                </div>
            </section> */}

        </div>
        
    )
}

export default Home