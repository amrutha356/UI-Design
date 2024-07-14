import PropTypes from "prop-types";

const Header = ({ className = "", dashboard, page }) => {
  return (
    <header className={`top-nav ${className}`}>
      <div className="topnav">
        <div className="navcontainer">
          <a className="dashboard3">{dashboard}</a>
          <div className="profile">
            <div className="icon11">
              <div className="shop-name">
                <a className="nannys-shop">Nanny’s Shop</a>
                <img
                  className="fichevron-down-icon2"
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
            <img
              className="iconlybulknotification"
              loading="lazy"
              alt=""
              src="/iconlybulknotification.svg"
            />
            <img
              className="profile-1-icon"
              loading="lazy"
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="breadcrumbs">
        <div className="contnet">
          <img className="iconlybulkhome" alt="" src="/iconlybulkhome.svg" />
          <div className="item">
            <div className="separator">/</div>
            <a className="page">{page}</a>
          </div>
          <div className="item1">
            <div className="div10">/</div>
            <a className="page1">Page</a>
          </div>
          <div className="item2">
            <div className="div11">/</div>
            <a className="page2">Page</a>
          </div>
          <div className="item3">
            <div className="div12">/</div>
            <a className="page3">Page</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  dashboard: PropTypes.string,
  page: PropTypes.string,
};

export default Header;
