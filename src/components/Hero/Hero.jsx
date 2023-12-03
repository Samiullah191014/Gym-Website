import React from 'react'
import Header from "../Header/Header";
import heart from "../../Assets/heart.png";

import "./Hero.css";
import { motion } from "framer-motion";


const  Hero=()=> {
  const transition ={ type: 'spring',duration : 3}
  return (
    <div className="hero">
      <div className="left-hero">
        <Header/>
        {/* the best ad  */}
        <div className="the-best-ad">
        <motion.div
        initial={{left:'238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition,type:'tween'}}
        ></motion.div>
        <span>The best fitness club in the town  </span>
         </div>

         {/*hero heading */}
          <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div><span>Ideal body</span></div>
         </div>

         <div>
          <span className="span1">
            In here we will help you to build your body
            and make himself perfect.
          </span>
         </div>

         {/* Figures */}

         <div className="figures">
          <div>
          <span>+140</span> 
          <span>expert coaches</span>
          </div>

          <div>
          <span>+978</span>
          <span>member joined</span>
          </div>

          <div>
          <span>+50</span>
          <span>fitness Programs</span>
          </div>
         </div>

         {/* hero button */}

         <div className="hero-button">
         <button className="btn">Get Started</button>
         <button className="btn">lern More</button>
         </div>


      </div>
      <div className="right-hero">
      <button className="btn">Join More</button>

      <div className="heart-rate">
      <img src={heart} alt="" />
       <span>Heart Rate</span>
       <span>116 bpm</span>
      </div>

      {/* Hero images */}

   
      

      </div>
    </div>
  )
}

export default Hero