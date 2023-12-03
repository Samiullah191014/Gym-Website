import React from "react";
import "./Footer.css";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";




const Footer=()=>{

    return(<>
       
       
        <hr/>
        <footer className="footer">
        <p> &reg; All right reserved by Gym &copy; 2022 to 2023</p>
        <span> <BsGithub/>  <BsInstagram/> <BsLinkedin/> </span>

        
       
        </footer>
       

    </>)

}

export default Footer;