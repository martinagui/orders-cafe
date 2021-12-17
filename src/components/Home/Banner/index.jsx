import React from "react";
import "./styles.css";
import headerImg from "./headerImg.png";
import Logo from "components/common/Logo";

const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious food for your craving</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button onClick={handleScrollMenu}>
            Order now <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src={headerImg} className="header-img" alt="banner" />
    </header>
  );
};

export default Banner;
