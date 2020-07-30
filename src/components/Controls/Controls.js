import React from "react";
import "./Controls.scss";

import ShuffleIcon from "../../assets/images/shuffle_ico.svg";
import PreviousIcon from "../../assets/images/previous_ico.svg";
import NextIcon from "../../assets/images/next_ico.svg";
import RepeatIcon from "../../assets/images/repeat_ico.svg";
import PlayActiveIcon from "../../assets/images/Play_active.png";
import Waveform from "../../assets/images/waveform.svg";

function Controls() {
  return (
    <section className="controls">
      <div className="controls-container">
        <img src={ShuffleIcon} className="control-item" alt="Shuffle play" />
        <img src={PreviousIcon} className="control-item" alt="Previus track" />
        <img src={PlayActiveIcon} alt="Play / Stop" />
        <img src={NextIcon} className="control-item" alt="Next track" />
        <img src={RepeatIcon} className="control-item" alt="Repeat this track" />
      </div>

      <div className="progress-bar-container">
        <p className="duration-info">1:47</p>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <p className="duration-info">4:21</p>
      </div>

      <img src={Waveform} className="waveform" alt="Waveform" />
    </section>
  );
}

export default Controls;
