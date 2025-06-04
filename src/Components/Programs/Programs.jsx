import React from "react";
import '../Programs/Programs.css';
import program1 from '../Assets/program1.webp';
import program2 from '../Assets/program3.jpg';
import program3 from '../Assets/program4.jpg';
import programicon1 from '../Assets/programicon2.png';
import programicon2 from '../Assets/programicon2.png';
import programicon3 from '../Assets/programicon3.png';

const Program=()=>{
    return(
        <div className="programs">
            <div className="program">
                <img src={program1} alt="" />
                <div className="caption">
                    <img src={programicon1} alt="" />
                    <p>Graduation Degree</p>
                </div>
                </div>
                <div className="program">
                <img src={program2} alt="" />
                <div className="caption">
                    <img src={programicon2} alt="" />
                    <p>Master Degree</p>
                </div>
                </div>
                <div className="program">
                <img src={program3} alt="" />
                <div className="caption">
                    <img src={programicon3} alt="" />
                    <p>Post Graduation</p>
                </div>
                </div>
        
        </div>
    )
}
export default Program;
