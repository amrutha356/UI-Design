import PropTypes from "prop-types";
import { useState } from "react";

const OrderCard = ({ className = "", cardBackground, pending }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={`ordercard ${className}`}>
      <div
        className="container1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="card-background-icon"
          loading="lazy"
          alt=""
          src={cardBackground}
          style={{
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div
          className="content1"
          style={{
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <div className="top2">
            <a className="iphone-13">iPhone 13</a>
            <div className="right3">
              <div className="sept-2022">12 Sept 2022</div>
            </div>
          </div>
          <div className="bottom4">
            <div className="x-1-wrapper">
              <div className="x-1">₦730,000.00 x 1</div>
            </div>
            <div className="pending-wrapper">
              <div className="pending2">{pending}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  className: PropTypes.string,
  cardBackground: PropTypes.string,
  pending: PropTypes.string,
};

export default OrderCard;
