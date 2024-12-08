import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import igLogo from "../../assets/IG-logo.png";
import youtubeLogo from "../../assets/youtube-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
//import  dashLogo  from "../../assets/dashLogo.png";

const Socials: React.FC = () => {
  return (
    <div className="border-2 h-full w-full">
      <div className="">
        <Swiper
          //spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="flex"
        >
          <SwiperSlide>
            <img src={igLogo} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={youtubeLogo} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={facebookLogo} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Socials;
