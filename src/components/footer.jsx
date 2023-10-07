import React from "react";
import "./footer.css";

function Footer({prop}) {
  return (
    <div ref={prop} className="mt-[5%] bg-black text-white">
      <div className="blackbox">
        <div className="logoimage">
          <img
            src="../images/logo.png"
            alt="logo"
            className="h-36 w-36 rounded-lg"
          />
        </div>
        <div className="contact">
          <h1 className="contact-text">&#128222; 8560051433</h1>
          <h2 className="contact-text mt-[22px]">&#128231; mark514@gmail.com</h2>
        </div>
        <div className="address">
          <h1>Address</h1>
          <h2 className="mt-[22px]">Rathani Bazar, Pune, India</h2>
        </div>
        <a href="#">
          <img src="../images/ps.png" alt="playstore" className=" playstore" />
        </a>
      </div>
      <div className=" bg-orange-500 orangebox1">
        <h1>deHoFoo © 2021 All rights reserved.</h1>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and conditions</a>
        <div>
          <ul>
            <li className="threeapps">
              <a href="#">
                <img src="../public/images/instalogo.png" alt="instalogo" />
              </a>
              <a href="#">
                <img src="../public/images/fblogo.png" alt="fblogo" />
              </a>
              <a href="#">
                <img src="../public/images/pslogo.png" alt="playstorelogo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
