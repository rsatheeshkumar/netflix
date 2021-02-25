import React from "react";
import { Link } from "react-router-dom";

const TabContent1 = () => {
  return (
    <div className="tab-1-content tab-content-item show">
      <div className="tab-1-content-inner">
        <div>
          <p className="text-lg">
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </p>
          <Link to="#" className="btn btn-lg">
            Watch Free For 30 Days
          </Link>
        </div>
        <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
      </div>
    </div>
  );
};

export default TabContent1;
