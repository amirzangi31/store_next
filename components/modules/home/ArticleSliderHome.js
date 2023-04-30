import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import CardArticle from "@/components/modules/cards/CardArticle";

function ArticleSliderHome({ articles }) {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      navigation={true}
      speed={400}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        980: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
      style={{
        padding: "30px 8px",
      }}
    >
      {articles.map((item) => (
        <SwiperSlide key={item._id} > 
          <CardArticle  {...item}  /> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArticleSliderHome;
