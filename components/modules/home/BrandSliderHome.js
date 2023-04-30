import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function BrandSliderHome() {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
              speed={500}
              loop={true}
              spaceBetween={50}
              autoplay={{
                delay: 800,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                980: {
                  slidesPerView: 6,
                },
                1200: {
                  slidesPerView: 6,
                },
                1400: {
                  slidesPerView: 8,
                },
              }}
              style={{
                padding : "30px 8px"
              }}
            >
              <SwiperSlide>
                <Image 
                src="/images/brands/1.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/1.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/1.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/1.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                src="/images/brands/2.png" 
                width={1000}
                height={700}
                alt="brand_image"
                className="w-full"
                />
              </SwiperSlide>
            </Swiper>
  );
}

export default BrandSliderHome;
