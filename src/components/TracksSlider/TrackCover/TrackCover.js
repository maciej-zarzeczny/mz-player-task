import React from "react";
import "./TrackCover.scss";

import UsertiveLogo from "../../../assets/images/usertive_logo.svg";

class Track extends React.Component {
  render() {
    const { img, active } = this.props;

    const coverStyle = active ? "active" : "";

    return (
      <div className={`track-cover ${coverStyle}`}>
        <img src={img} alt="Track cover" />
        {active && (
          <div className="logo-container">
            <img src={UsertiveLogo} className="usertive-logo" alt="Usertive logo" />
          </div>
        )}
      </div>
    );
  }
}

export default Track;
