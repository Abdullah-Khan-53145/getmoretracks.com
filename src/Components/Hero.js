import React from "react";
import "../styles/hero.css";
function Hero() {
  return (
    <div className="hero__main">
      <div className="hero__child">
        <div className="hero__info">
          <h1>Premium Global Package Tracking For e-Commerce business</h1>
          <p>
            Track packages from China, USPS, Canada Post, Royal Mail, Deutsche
            Post, LBC, Aliexpress, UPS, Shein, FedEx, Pitney Bowes, eBay, Amazon
          </p>
          <div className="hero__app_download__buttons">
            <button>
              <img src="./imgs/apple_download.JPG" />
            </button>
            <button>
              <img src="./imgs/google_download.JPG" />
            </button>
          </div>
        </div>
        <div className="hero__img">
          <img src="./imgs/hero_app_img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
