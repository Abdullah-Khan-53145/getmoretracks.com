import React from "react";
import "../styles/app.css";
function Extension() {
  return (
    <div className="app__main">
      <div className="app__child">
        <h2 className="top__heading">Extention/App</h2>
        <h1>getmoretracks Chrome extension</h1>
        <h2>
          Download it{" "}
          <a href="https://chrome.google.com/webstore/detail/dsautopilot-addresses-and/honkmidaimppeonkobeoegomglfbnlhm?hl=en">
            here
          </a>
        </h2>
        <iframe
          width="840"
          height="630"
          src="https://www.youtube.com/embed/SRd4i0oPjQ8"
          title="getmoretracks.com Chrome app"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Extension;
