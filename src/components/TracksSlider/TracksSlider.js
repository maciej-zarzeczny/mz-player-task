import React from "react";
import "./TracksSlider.scss";
import Track from "./TrackCover/TrackCover";

import Cover1 from "../../assets/images/cover.png";
import Cover2 from "../../assets/images/unreleased_cover.png";
import Cover3 from "../../assets/images/cover-1.png";

function TracksSlider() {
  const coversList = [Cover1, Cover2, Cover3];

  const covers = coversList.map((cover, idx) => {
    return <Track img={cover} active={idx === 1} key={idx} />;
  });

  return <section className="tracks-slider">{covers}</section>;
}

export default TracksSlider;
