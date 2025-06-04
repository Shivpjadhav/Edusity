import React from "react";
import './Campus.css';
import gallery_1 from '../Assets/campus1.jpg';
import gallery_2 from '../Assets/campus2.webp';
import gallery_3 from '../Assets/campus3.jpeg';
import gallery_4 from '../Assets/campus4.jpg';
const Campus = ()=>{
    return(

<div className="campus">
  <div className="gallery">
  <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
  </div>
  <button>See more -</button>
</div>


    )
}
export default Campus;