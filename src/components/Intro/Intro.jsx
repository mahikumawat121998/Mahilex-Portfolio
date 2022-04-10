import React, { useContext, useEffect, useRef } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy11.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Quora from "../../img/quora.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { init } from "ityped";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const textRef = useRef();
  console.log("mahilex", textRef);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1100,
      backSpeed: 60,
      strings: [
        "Web-Developer",
        "Content Writer",
        "Figma Designer",
        "Wordpress Developer",
        "UX/UI Designer",
      ],
    });
  }, []);

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Mahesh Kumawat</span>
          <div style={{ display: "flex" }}>
            <span style={{ fontSize: "31px" }}>freelancer</span>{" "}
            <span
              ref={textRef}
              style={{ fontSize: "31px", color: "#fca61f", marginLeft: "6px" }}
            ></span>
          </div>

          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://github.com/mahikumawat121998"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="https://github.com/mahikumawat121998" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-kumawat-68b0aa190/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedIn}
              alt="https://www.linkedin.com/in/mahesh-kumawat-68b0aa190/"
            />
          </a>
          <a
            href="https://www.instagram.com/deadofwrite_aksit/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.instagram.com/deadofwrite_aksit/"
            target="_blank"
            rel="noreferrer"
          >
            <img  className="image-quora" src={Quora} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img style={{marginTop:"130px"}} height="360px" src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Wordpress" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
