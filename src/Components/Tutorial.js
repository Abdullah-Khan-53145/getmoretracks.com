import React from "react";
import "../styles/tutorials.css";
function Tutorial() {
  return (
    <div className="tutorials__main">
      <div className="about__us_card">
        <h1>About the Service</h1>
        <h2>
          To use our service correctly, watch the video tutorial below and check
          out out <a href="">Knowledge Base</a>
        </h2>

        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/-UD_0qCJ7ec"
          title="getmoretracks.com tutorial"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Tutorial;
