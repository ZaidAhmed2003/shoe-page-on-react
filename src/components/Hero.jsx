import React from "react";
import shoeImage from "../images/shoe_image.png";
import flipkartImage from "../images/flipkart.png";
import amazonImage from "../images/amazon.png";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="section">
        <div className="section-left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btns">
            <Button color="white" backGround="red">
              Shop Now
            </Button>
            <Button backGround="white" color="gray" none="1px solid gray">
              Category
            </Button>
          </div>
          <div className="section-link">
            <p className="section-available">Also Available On</p>
            <div className="icons">
              <img src={flipkartImage} alt="" />
              <img src={amazonImage} alt="" />
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={shoeImage} alt="" />
        </div>
      </div>
    </>
  );
}
