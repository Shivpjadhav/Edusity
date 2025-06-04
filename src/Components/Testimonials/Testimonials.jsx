import React, { useRef } from "react";
import './Testimonials.css';
import users1 from '../Assets/test1.jpg';
import users2 from '../Assets/test2.jpg';
import users3 from '../Assets/test3.jpg';
import next_icon from '../Assets/right.png';
import back_icon from '../Assets/back.png';

const Testimonials = ()=>{
 
     const slider=useRef();
     let tx=0;
    const slideForward =()=>{
    if(tx > -50){
    tx -= 33;
     }
     slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward =()=>{
        if(tx <0){
            tx += 25;
             }
             slider.current.style.transform=`translateX(${tx}%)`;
            }
    
    return(
  <div className="testimonials">
    <img src={back_icon} onClick={slideBackward} className="next-btn" alt="" />
    <img src={next_icon} onClick={slideForward} className="back-btn" alt="" />
    <div className="slider">
  <ul ref={slider}>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={users1} alt="" />
            </div>
            <h3>Willam Jackson</h3>
            <span>Edusity ,USA</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita corrupti, eaque accusamus voluptates eos enim adipisci nulla perspiciatis eius neque debitis rem amet libero at temporibus praesentium magni blanditiis!
        </p>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={users2} alt="" />
            </div>
            <h3>Willam Jackson</h3>
            <span>Edusity ,USA</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita corrupti, eaque accusamus voluptates eos enim adipisci nulla perspiciatis eius neque debitis rem amet libero at temporibus praesentium magni blanditiis!
        </p>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={users3} alt="" />
            </div>
            <h3>Willam Jackson</h3>
            <span>Edusity ,USA</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita corrupti, eaque accusamus voluptates eos enim adipisci nulla perspiciatis eius neque debitis rem amet libero at temporibus praesentium magni blanditiis!
        </p>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={users2} alt="" />
            </div>
            <h3>Willam Jackson</h3>
            <span>Edusity ,USA</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita corrupti, eaque accusamus voluptates eos enim adipisci nulla perspiciatis eius neque debitis rem amet libero at temporibus praesentium magni blanditiis!
        </p>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={users1} alt="" />
            </div>
            <h3>Willam Jackson</h3>
            <span>Edusity ,USA</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita corrupti, eaque accusamus voluptates eos enim adipisci nulla perspiciatis eius neque debitis rem amet libero at temporibus praesentium magni blanditiis!
        </p>
    </li>
  </ul>

    </div>
  </div>
    )
}
export default Testimonials;