import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./breakfast.css";

function Breakfast() {
  const [orderPop, setOrderPop] = useState(false);

  const handleOrders = () => {
    setOrderPop(true);
  };

  const closeOrderPage = () => {
    setOrderPop(false);
  };
  return (
    <div className="full-breakfastdiv">
      <div className="topNavigation">
        <Navbar />
      </div>
      <div className={`${orderPop === true ? "orderpage" : "hideorderpage"}`}>
        <p className="order-text">You Have Placed an Order</p>
        <p className="order-text">Thank You!</p>
        <button className="order-button" onClick={closeOrderPage}>
          OK
        </button>
      </div>
      <div className="imageSection1">
        <div className="burrito">
          <div className="burritoimg bg-img-same"></div>
          <div className="section1text">
            <h1 className="headline">Burrito</h1>
            <p>
              This is one of my favorite in the list. I have used whole wheat
              roti to make these burritos but if you prefer you can use store
              bought Tortillas also.
            </p>
            <p>Price - 100 -/Rs</p>
            <button className="order-button" onClick={handleOrders}>
              Order Now
            </button>
          </div>
        </div>
        <div className="cheela">
          <div className="cheelaimg bg-img-same"></div>
          <div className="section1text">
            <h1 className="headline">Cheela</h1>
            <p>
              Super yummy, healthy, nutritious lentil cheela which are just
              perfect for a fulfilling breakfast. You can add paneer filling to
              make these more healthy and kid-friendly.
            </p>
            <p>Price - 100 -/Rs</p>
            <button className="order-button" onClick={handleOrders}>
              Order Now
            </button>
          </div>
        </div>
        <div className="sandwich">
          <div className="sandwichimg bg-img-same"></div>
          <div className="section1text">
            <h1 className="headline">Sandwich</h1>
            <p>
              This is the food for breakfast It is Tasty and Healthy and well no
              marks for guessing why kids like this one
            </p>
            <p>Price - 100 -/Rs</p>
            <button className="order-button" onClick={handleOrders}>
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="imgsection2">
        <div className="uttapam">
          <div className="uttapamimg bg-img-same"></div>
          <div className="section1text">
            <h1 className="headline">Uttapam</h1>
            <p>
              There is no way your kids won't love it. This also makes a good
              choice for kids lunch box. It tastes delicious and it is loaded
              with veggies. So go ahead and give it a try
            </p>
            <p>Price - 100 -/Rs</p>
            <button className="order-button" onClick={handleOrders}>
              Order Now
            </button>
          </div>
        </div>
        <div className="toast">
          <div className="toastimg bg-img-same"></div>
          <div className="section1text">
            <h1 className="headline">Toast</h1>
            <p>
              ready in 10 minutes, this sandwich is perfect for the evening
              snack, breakfast or for kids lunch box
            </p>
            <p>Price - 100 -/Rs</p>
            <button className="order-button" onClick={handleOrders}>
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Breakfast;
