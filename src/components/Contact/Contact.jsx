import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  // const [done, setDone] = useState(false)
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_b03fgmo",
        "template_yjdxr1s",
        e.target,
        "user_UUQwsZUcY1G9j4udFCE03"
      )
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <span style={{fontSize:"16px"}}>Hello Everyone! Have a great day 😺 ) I am here to <br /> help you.
           If you want to know something or you <br /> have any suggestion then please mail me. Thank You.</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" className="user"  placeholder="Name"  required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message" required/>
          <input style={{cursor:"pointer"}} type="submit" value="Send" className="button btn1"/>
          {message && <span>Thanks, I'll reply ASAP 😊   )</span>}
          
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
