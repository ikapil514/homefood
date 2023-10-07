import React from "react";
import Slide from "./slide";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./navbar";
import "./naci.css";

function Herobox() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="middlebox">
          <h3 className="text-orange-500 h3tag">
            'Ghar ka khaana... Direct Ghar se!'
          </h3>
          <h1 className="leading-snug h1tag">
            Enjoy Hygienic &
            <span className="text-orange-600"> Delecious homemade food</span>
          </h1>
          <div className="leading-relaxed">
            <ul className="font-medium text-2xl">
              <li className="flex">
                <img
                  src="../public/images/tickimg.jpg"
                  alt="tick"
                  className="h-8 w-10"
                />
                Authentic Homemade Food
              </li>
              <li className="flex ">
                <img
                  src="../public/images/tickimg.jpg"
                  alt="tick"
                  className="h-8 w-10"
                />
                FSSAI Certified Chef's
              </li>
              <li className="flex ">
                <img
                  src="../public/images/tickimg.jpg"
                  alt="tick"
                  className="h-8 w-10"
                />
                Fresh And Healthy Food
              </li>
            </ul>
          </div>
        </div>
        <div className="biggimage"></div>
      </div>
      <Slide></Slide>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default Herobox;
