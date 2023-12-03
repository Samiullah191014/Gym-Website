import React,{useRef} from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join=()=>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c5sp26m', 'template_5b4m818', form.current, 'EWJ0JD9Lg9IPhMzib')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }; 

    return(<>
           <div className="join" id="join-us">
            <div className="join-left">
            <hr/>
                <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
                </div>

                <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US ?</span>
                </div>
            </div>

            <div className="join-right">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="enter your email address" />
                    <button className="btn btn-j">Join now</button>
                </form>
            </div>
           </div>

    </>)
}

export default Join;