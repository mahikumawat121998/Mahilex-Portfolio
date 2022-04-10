import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide,  } from "swiper/react"
import { FreeMode, Pagination ,Autoplay} from "swiper";
import "swiper/css";
import Insta from "../../img/insta.png";
import Quoralove from "../../img/Quoralove.png";
import LinkdinLove from "../../img/linkdinlove.png";
import Githublove from "../../img/githublove.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Hey Buddy !</span>
      <span>I m Here</span>

      {/* slider */}
      <Swiper
      style={{height:"600px"}}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
         
         
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a  href="https://www.instagram.com/deadofwrite_aksit/" target="_blank"  rel="noreferrer"> 
          <img style={{height:"200px" ,objectFit:"cover"}} src={Insta} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.quora.com/profile/Mahesh-Kumawat-178" target="_blank"  rel="noreferrer">  
          <img style={{height:"200px" ,objectFit:"cover"}} src={Quoralove} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide >
          <a href="https://github.com/mahikumawat121998" target="_blank" rel="noreferrer" > 
          <img style={{height:"200px" ,objectFit:"cover"}} src={Githublove} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://www.linkedin.com/in/mahesh-kumawat-68b0aa190/"  target="_blank"  rel="noreferrer">          
          <img style={{height:"200px" ,objectFit:"cover"}} src={LinkdinLove} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
