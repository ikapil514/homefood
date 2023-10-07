import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./imagesslider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper/modules";

const slides = [
  {
    src: "../public/images/banner1.png",
    alt: "image 1",
  },
  {
    src: "../public/images/banner2.png",
    alt: "image 2",
  },
  {
    src: "../public/images/banner3.png",
    alt: "image 3",
  },
  {
    src: "../public/images/banner4.png",
    alt: "image 4",
  },
  {
    src: "../public/images/banner5.png",
    alt: "image 5",
  },
  {
    src: "../public/images/banner6.png",
    alt: "image 6",
  },
];

function App() {
  return (
    <div>
      <h1>Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className="">
          {slides.map((item, idx) => {
            return <img src={item.src} alt={item.alt} key={idx} />;
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
