import React from "react";
import "./Navbar.scss";
import BackIcon from "../../assets/images/back_ico.svg";
import MoreIcon from "../../assets/images/more_ico.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={BackIcon} className="nav-item back-button" alt="Go back" />
      <div className="nav-item title-container">
        <p className="title">ALBUM</p>
        <p className="subtitle">Unreleased</p>
      </div>
      <img src={MoreIcon} className="nav-item more-button" alt="More" />
    </nav>
  );
}

export default Navbar;
