import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { UilLinkedinAlt } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mahikumawat121998@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/deadofwrite_aksit/"  target="_blank"
         rel="noreferrer" > 
          <Insta color="white" size={"3rem"} />
          </a>
<a href="https://m.facebook.com/aksit.kumawat.1"  target="_blank"
         rel="noreferrer" > 
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/mahikumawat121998"  target="_blank"
         rel="noreferrer" > 
          <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/mahesh-kumawat-68b0aa190/"  target="_blank"
         rel="noreferrer" >
          < UilLinkedinAlt color="white" size={"3rem"}/>
          </a>
        </div>
         
      </div>
    </div>
  );
};

export default Footer;
