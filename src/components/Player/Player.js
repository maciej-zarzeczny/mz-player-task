import React from "react";
import { connect } from "react-redux";
import "./Player.scss";

import Navbar from "../Navbar/Navbar";
import TracksSlider from "../TracksSlider/TracksSlider";
import Controls from "../Controls/Controls";
import BottomInfoBar from "../BottomInfoBar/BottomInfoBar";

class Player extends React.Component {
  render() {
    const { tracks, currentTrack } = this.props;

    return (
      <section className="player">
        <div className="gradient"></div>
        <div className="bg-image"></div>

        <Navbar />
        <TracksSlider />

        <div className="track-info">
          <h1 className="track-title">{tracks[currentTrack].title}</h1>
          <p className="track-author">{tracks[currentTrack].author}</p>
        </div>

        <Controls />
        <BottomInfoBar />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.player.tracks,
  currentTrack: state.player.currentTrack,
});

export default connect(mapStateToProps, null)(Player);
