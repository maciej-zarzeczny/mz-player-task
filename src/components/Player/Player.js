import React from "react";
import "./Player.scss";

import Navbar from "../Navbar/Navbar";
import TracksSlider from "../TracksSlider/TracksSlider";
import Controls from "../Controls/Controls";
import BottomInfoBar from "../BottomInfoBar/BottomInfoBar";

function Player() {
  return (
    <section className="player">
      <div className="gradient"></div>
      <div className="bg-image"></div>

      <Navbar />
      <TracksSlider />

      <div className="track-info">
        <h1 className="track-title">Self Conscious</h1>
        <p className="track-author">KANYE WEST</p>
      </div>

      <Controls />
      <BottomInfoBar />
    </section>
  );
}

export default Player;
