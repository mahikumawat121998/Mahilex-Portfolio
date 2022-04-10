import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FreeMode, Pagination ,Autoplay} from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profilePic1.jpg";
import profilePic2 from "../../img/profilePic2.jpg";
import profilePic3 from "../../img/profilePic3.jpg";
 

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " Mahesh is quite good in the Profession and enthusiastic to discover new things.",
        name:"Aayush Dadich",
        post:"Senior Dot-net Developer"
    },
    {
      img: profilePic2,
      review:
        " Being successful is about professionalism, and chewing gum is unprofessional. Its also a huge pet peeve of mine.",
        name:"Karan Swarnkar", 
        post:"Dot Net Developer"

    },
    {
      img: profilePic3,
      review:
        " He is quite elegant to make UI and he knows to make things simple",
        name:"Rajveer Singh",
        post:"Web-Developer",
    },
     
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
         
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <h3>{client.name}</h3>
                <span style={{marginTop:"-20px", fontSize:"15px", color:"grey"}}>{client.post}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
