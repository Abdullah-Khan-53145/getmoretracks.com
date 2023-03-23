import React from "react";
import "../styles/api.css";
function APIComponenet() {
  return (
    <div className="api__main">
      <div className="api__child">
        <h2>API</h2>
        <p>
          Please contact us to get an access{" "}
          <a href="mailto:support@getmoretracks.com">
            support@getmoretracks.com
          </a>
        </p>
        <a href="http://api.getmoretracks.com/api/documentation">
          API documentation
        </a>
      </div>
    </div>
  );
}

export default APIComponenet;
