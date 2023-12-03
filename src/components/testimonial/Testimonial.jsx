import React from "react";
import "./Testimonial.css";
import rock from "../../Assets/wr10.jpg";

import { motion } from "framer-motion";


         

const Testimonial=()=>{
    const transition ={ type: 'spring',duration : 3}

    return(<>
        
        <div className="testimonial">
        <div className="testimonial-left">
            <span>Testimonial</span>
            <span>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <motion.span 
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1,x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={transition}
            
            >Lorem ipsum is all about the national language of my dream
            <div className="w-100"></div> 
                 world but today is my day and i don't care about all.The weather 
                 <div className="w-100"></div> 
                   is very pleasent today.</motion.span>
            <span>JOHN KEVIN-
            <span>COACH</span>
            </span>
            
        </div>

        <div className="testimonial-right ">
        <motion.div
        initial={{opacity: 0, x: -50}}
        transition={{...transition, duration:2}}
        whileInView={{opacity: 1,x:0}}
        ></motion.div>

        <motion.div
        initial={{opacity: 0, x: 50}}
        transition={{...transition, duration:2}}
        whileInView={{opacity: 1,x:0}}
        ></motion.div>
        <img src={rock} alt=""/>
        </div>
         </div>

    </>)
}

export default Testimonial;