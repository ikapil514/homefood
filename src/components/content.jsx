import React from "react";
import "./content.css";

function Content({ prop }) {
  return (
    <div ref={prop}>
      <h1 className="firsttext">
        About our de'<span>Ho</span>foo food
      </h1>
      <div className="firstpic">
        <div className="headlinebox">
          <p className="headline">
            Authentic <span>Home-Made Food</span>
          </p>
          <p className="headline-text">
            Food prepared in restaurants is not as authentic as they may claim.
            Except for a few high-end places; most dishes taste the same. For
            all food lovers, this is a turn-off. With deHoFoo, we connect all
            food lovers to home-chefs who serve authentic food, retaining the
            original taste and aroma of the dish.
          </p>
        </div>
        <div className="first bgimagesame"></div>
      </div>
      <div className="secondpic">
        <div className="headlinebox">
          <p className="headline">
            FSSAI Certified <span>Home-Chefs</span>
          </p>
          <p className="headline-text">
            We strictly follow the rules and regulations laid down by the
            governing authorities. All our home-chefs are FSSAI (Food Safety and
            Standards Authority of India) certified, giving you complete
            assurance that the food is hygienic and appropriately prepared
          </p>
        </div>
        <div className="second bgimagesame"></div>
      </div>
      <div className="thirdpic">
        <div className="headlinebox">
          <p className="headline">
            Variety of Freshly<span>-Cooked Home Foo</span>
          </p>
          <p className="headline-text">
            It is not recommended to dining in or ordering out food from a
            restaurant daily. It might lead to serious health issues over the
            period. With deHoFoo you can eat freshly-cooked home food of your
            choice every day without worrying about the taste, preparation,
            hygiene and your overall health
          </p>
        </div>
        <div className="third bgimagesame"></div>
      </div>
      <div className=" bg-orange-400 orangebox">
        <div className="phone-contentbox">
          <h1 className="context-box">
            Delectable Home Cooked food that makes you go wow.
          </h1>
          <h2 className="small-textbox">
            Order Home-cooked food on the go, with the all-new de'HoFoo app.
          </h2>
          <a href="#">
            <img src="./images/ps.png" alt="playstore" className=" h-10" />
          </a>
        </div>
        <div className="phoneimage"></div>
      </div>
      <div className="chefbox">
        <div className="chefimage"></div>
        <div className="chefbigtext">
          <h1 className="chef-textheadline">
            Welcome to our <span>Journey</span>
          </h1>
          <ul className="chef-text">
            <li>&#9656; Start your Business & Grow with Us</li>
            <li>&#9656; Become de'HoFoo Chef </li>
            <li>&#9656; No Commission*</li>
            <li>&#9656; Showcase your Cooking Talent</li>
          </ul>
          <button
            className="
          border-4 border-orange-500 
          bg-orange-500 
          text-white text-lg font-semibold
          rounded-lg
          w-[135px] h-[40px]"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
export default Content;
