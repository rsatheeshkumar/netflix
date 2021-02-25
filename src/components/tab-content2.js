import React from "react";
import { Link } from "react-router-dom";

const TabContent2 = () => {
  return (
    <div className="tab-2-content tab-content-item">
      <div className="tab-2-content-top">
        <p className="text-lg">
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </p>
        <Link to="#" className="btn btn-lg">
          Watch Free For 30 Days
        </Link>
      </div>
      <div className="tab-2-content-bottom">
        <div>
          <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
          <p className="text-md">Watch on your TV</p>
          <p className="text-dark">
            Smart TVs, PlayStation, Xbox, Chrome cast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
          <p className="text-md">Watch instantly or download for later</p>
          <p className="text-dark">
            Available on phone and tablet, wherever you go.
          </p>
        </div>
        <div>
          <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
          <p className="text-md">Use any computer</p>
          <p className="text-dark">Watch right on Netflix.com.</p>
        </div>
      </div>
    </div>
  );
};

export default TabContent2;
