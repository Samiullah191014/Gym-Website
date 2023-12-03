import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.jpg";
import {Link} from 'react-scroll';

const Header=()=>{

    return(<>

         <div className="header">
            <img src={logo} alt="" className="logo"/>
            <ul className="header-menue">
                <li><Link>Home</Link></li>
                <li><Link
                to='Program'
                spy={true}
                smooth={true}
                duration={500}
                delay={1000}
                >Programs</Link></li>
                <li><Link>Why use</Link></li>
                <li>Plans</li>
                <li>Testimonial</li>
            </ul>
         </div>
    </>)
}

export default Header;