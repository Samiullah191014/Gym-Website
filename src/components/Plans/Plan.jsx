import React from "react";
import "./Plan.css";
import {GoFlame} from "react-icons/go";
import {FaTenge} from "react-icons/fa";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {AiOutlineCheckCircle} from "react-icons/ai";


const Plan=()=>{

    return(<>

         <div className="plans-container">
         <div className="plan-header">
            <span className="stroke-text"> Ready to start</span>
            <span> Your journey</span>
            <span className="stroke-text"> Now withus</span>
         </div>


         <div className="plans">
         <div>
            <span><GoFlame/></span>
            <span>BASIC PLAN</span>
            <span>$25</span>
            <span><AiOutlineCheckCircle/> 2 hours of exercises</span>
            <span><AiOutlineCheckCircle/> Free consultaion to coaches</span>
            <span><AiOutlineCheckCircle/> Access to the comunity</span>
            <span>See more benefits-></span>
            <button type="button">Join Now</button>
            </div>

            <div>
            <span><BsFillSuitHeartFill/></span>
            <span>PREMIUM PLAN</span>
            <span>$30</span>
            <span><AiOutlineCheckCircle/> 5 hours of exercises</span>
            <span><AiOutlineCheckCircle/> Free consultaion to coaches</span>
            <span><AiOutlineCheckCircle/> Accessto minibar</span>
            <span>See more benefits-></span>
            <button type="button">Join Now</button>
            </div>

            <div>
            <span><FaTenge/></span>
            <span>ADVANCE PLAN</span>
            <span>$45</span>
            <span><AiOutlineCheckCircle/> 8 hours of exercises</span>
            <span><AiOutlineCheckCircle/> consultaion of private coaches</span>
            <span><AiOutlineCheckCircle/> Free Fitnes Merchandises</span>
            <span>See more benefits-></span>
            <button type="button">Join Now</button>
            </div>
         </div>
     
         </div>


    </>)
}

export default Plan;