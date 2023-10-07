import React, { useState } from "react";
import "./slide.css";

function Imageslider() {
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

  return (
    <div className="parentdiv">
      <div className="sliderdiv">
        {slides.map((item, idx) => {
          return(
            <img src={item.src} alt={item.alt} key={idx} className="allimage" />
          )
        })}
      </div>
      <span className="flex justify-center">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={null}
              className="rounded-full mx-1 h-2 w-2 bg-slate-600"
            ></button>
          );
        })}
      </span>
      <div className="bigone p-24">
      </div>
    </div>
  );
}

export default Imageslider;
