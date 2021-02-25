import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = (e) => {
    setShow(!show);
    console.log(e.target);
  };

  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img
            className="image"
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt="Netflix"
          />
          <Link to="#" className="btn btn-rounded">
            Sign In
          </Link>
        </div>
        <div className="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <Link to="#" className="btn btn-xl">
            Watch Free For 30 Days{"  "}
            <i className="fas fa-chevron-right btn-icon"> </i>
          </Link>
        </div>
      </header>

      <section className="tabs" onClick={toggle}>
        <div className="container">
          <div className={`tab-1 tab-item ${show ? "tab-border" : null}`}>
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Cancel at any time</p>
          </div>
          <div className={`tab-2 tab-item  ${show ? "tab-border" : null}`}>
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div className={`tab-3 tab-item ${show ? "tab-border" : null}`}>
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
