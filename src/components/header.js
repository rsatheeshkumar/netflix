import { Link } from "react-router-dom";

const Header = ({ onUpdateTab, activeTab }) => {
  const tabList = [
    {
      id: 1,
      icon: "fas fa-door-open fa-3x",
      tab: "Cancel at any time",
    },
    {
      id: 2,
      icon: "fas fa-tablet-alt fa-3x",
      tab: "Watch anywhere",
    },
    {
      id: 3,
      icon: "fas fa-tags fa-3x",
      tab: "Pick your price",
    },
  ];

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

      <section className="tabs">
        <div className="container">
          {tabList.map(({ id, icon, tab }) => {
            return (
              <div
                key={id}
                className={`tab-1 tab-item ${activeTab === id && "tab-border"}`}
                onClick={() => onUpdateTab(id)}
              >
                <i className={icon}></i>
                <p className="hide-sm">{tab}</p>
              </div>
            );
          })}

          {/* <div
            className={`tab-1 tab-item ${
              activeTab === 1 ? "tab-border" : null
            }`}
            onClick={() => onUpdateTab(1)}
          >
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Cancel at any time</p>
          </div>
          <div
            className={`tab-2 tab-item  ${
              activeTab === 2 ? "tab-border" : null
            }`}
            onClick={() => onUpdateTab(2)}
          >
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div
            className={`tab-3 tab-item ${
              activeTab === 3 ? "tab-border" : null
            }`}
            onClick={() => onUpdateTab(3)}
          >
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
