import React from "react";
import { connect } from "react-redux";
import "./BottomInfoBar.scss";

import PlaylistIcon from "../../assets/images/playlist_ico.svg";

class BottomInfoBar extends React.Component {
  // Function for converting seconds to mm:ss format
  formatSeconds(value) {
    let mins = Math.floor((value / 60) % 60);
    let secs = Math.floor(value - mins * 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;

    return `${mins}:${secs}`;
  }

  render() {
    const { tracks, currentTrack } = this.props;

    let nextTrackIndex = currentTrack + 1;
    let nextTrackTitle = "";
    let nextTrackDuration = 0;

    // Check if this is the last track, if yes then display first tracks info
    if (nextTrackIndex >= tracks.length) nextTrackIndex = 0;
    nextTrackTitle = tracks[nextTrackIndex].title;
    nextTrackDuration = tracks[nextTrackIndex].duration;

    // Format seconds to mm:ss
    const nextTrackDurationFormatted = this.formatSeconds(nextTrackDuration);

    return (
      <section className="bottom-info-bar">
        <img src={PlaylistIcon} className="playlist-button" alt="Playlist" />

        <div className="next-track-info">
          <p className="next-track">Next</p>
          <p className="next-track-title">{nextTrackTitle}</p>
        </div>

        <p className="next-track-duration">{nextTrackDurationFormatted}</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.player.tracks,
  currentTrack: state.player.currentTrack,
});

export default connect(mapStateToProps, null)(BottomInfoBar);
