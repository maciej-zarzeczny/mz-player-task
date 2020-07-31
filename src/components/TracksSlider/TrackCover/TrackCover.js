import React from "react";
import "./TrackCover.scss";

import UsertiveLogo from "../../../assets/images/usertive_logo.svg";

class Track extends React.Component {
  render() {
    const { img, idx, currentTrack } = this.props;
    const active = idx === currentTrack;

    return (
      <div
        className={`track-cover ${active ? "active" : ""} ${idx < currentTrack ? "previous" : ""} ${
          idx > currentTrack ? "next" : ""
        }`}
      >
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
