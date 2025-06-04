import React from "react";
import '../About/About.css';
import about_img from '../Assets/hero_img.jpg';
import play_icon from '../Assets/play-button.png';

const About =({setPlayState})=>{
    return(
    <div className="about" name='about-us'>
        <div className="about-left">
<img src={about_img} className="about-img" alt="" />
<img src={play_icon} className="about-icon" onClick={()=>{
    setPlayState(true)
}} alt="" />
        </div>
        <div className="about-right">
 <h3>ABOUT UNIVERSITY</h3>
 <h2>Nurturing Tomorrow's Leaders Today</h2>
 <p>Our university provides high-quality education led by experienced faculty and modern infrastructure.</p>
<p>We are committed to creating a nurturing environment where innovation and leadership thrive.</p>
<p>Join a vibrant community of learners and shape your future with us today.</p>

        </div>
    </div>
    )
}
export default About;