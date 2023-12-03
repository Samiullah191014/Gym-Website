import React from "react";
import "./reason.css";
import img1 from "../../Assets/wr5.jpg";
import img2 from "../../Assets/wr6.png";
import img3 from "../../Assets/wr7.jpg";
import img4 from "../../Assets/wr10.jpg";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {SiTesla} from "react-icons/si";
import {SiPepsi} from "react-icons/si";
import {FaBicycle} from "react-icons/fa";



const Reason=()=>{

    return(<>
    
    <div className="reason">
        <div className="reason-left">
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         <img src={img4} alt="" />
        </div>

        <div className="reason-right">
        <div>
            <span> Some Reasons</span>
            <span className="stroke-text"> Why choose us </span> 
           <span><AiOutlineCheckCircle/> over 140+ expert coaches</span>
            <span><AiOutlineCheckCircle/>train smarter and faster than before</span>
            <span><AiOutlineCheckCircle/>1 free programe for new member</span>
            <span><AiOutlineCheckCircle/>reliable partners</span>
            <span> Our partners</span>
            <span><SiTesla/>  <SiPepsi/>  <FaBicycle/></span>
            </div>
        </div>
    </div>

    </>)
}

export default Reason;