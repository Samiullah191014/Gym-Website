import React from "react";
import "./program.css";
import {GoFlame} from "react-icons/go";
import {BiRun} from "react-icons/bi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {FaTenge} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";



const Program=()=>{

return(<>
    <div className="programs" id="programs">

        {/* Header */}
        <div className="programs-header">
            <span className="stroke-text">Explore Our</span>
            <span>Program</span>
            <span className="stroke-text">to shape you</span>
        </div>
        

        <div className="program-category">
    <div className="program1">
            <span>{<GoFlame/>}</span>
            <span>Strength Training</span>
            <span>In this program you are trained to improve your strength through many exercises</span>
            <button type="button">Join Now <BsArrowRight/></button>
         </div>

         <div className="program1">
            <span>{<BiRun/>}</span>
            <span>Cardio Training</span>
            <span>In this program you are trained to improve your strength through many exercises</span>
            <button type="button">Join Now <BsArrowRight/></button>
         </div>

         <div className="program1">
            <span>{<FaTenge/>}</span>
            <span>Fat Burning</span>
            <span>In this program you are trained to improve your strength through many exercises</span>
            <button type="button">Join Now <BsArrowRight/></button>
         </div>

         <div className="program1">
            <span>{<BsFillSuitHeartFill/>}</span>
            <span>Health Fitness</span>
            <span>In this program you are trained to improve your strength through many exercises</span>
            <button type="button">Join Now <BsArrowRight/></button>
         </div>

        </div>

    </div>
    
</>)

}

export default Program;