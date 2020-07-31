import React from "react";
import { connect } from "react-redux";
import {
  playPauseTrack,
  nextTrack,
  previousTrack,
  shuffle,
  repeat,
  incrementDuration,
  repeatTrack,
  goToTrack,
} from "../../redux/actions/PlayerActions";
import "./Controls.scss";

import ShuffleIcon from "../../assets/images/shuffle_ico.svg";
import PreviousIcon from "../../assets/images/previous_ico.svg";
import NextIcon from "../../assets/images/next_ico.svg";
import RepeatIcon from "../../assets/images/repeat_ico.svg";
import PlayActiveIcon from "../../assets/images/Play_active.png";
import PlayInactiveIcon from "../../assets/images/Play_inactive.png";
import Waveform from "../../assets/images/waveform.svg";

class Controls extends React.Component {
  componentDidMount() {
    this.trackDurationInterval = null;
  }

  componentDidUpdate(prevProps, prevState) {
    // Create interval for updating track duration progress (each second)
    if (!prevProps.trackPlaying && this.props.trackPlaying) {
      // Increment duration before the interval to avoid 1s delay
      this.props.incrementDuration();
      this.trackDurationInterval = setInterval(() => {
        this.props.incrementDuration();
      }, 1000);
    }
    // If track is not playing clear the interval
    else if (prevProps.trackPlaying && !this.props.trackPlaying) {
      if (this.trackDurationInterval !== null) {
        clearInterval(this.trackDurationInterval);
      }
    }

    // If the track is over go to the next one
    if (this.props.currentDuration > this.props.tracks[this.props.currentTrack].duration) {
      // If shuffle button is active choose random track other than the one currently playing
      if (this.props.shuffleActive) {
        let randomTrackNumber = -1;
        do {
          randomTrackNumber = Math.floor(Math.random() * this.props.tracks.length);
        } while (randomTrackNumber === this.props.currentTrack);

        this.props.goToTrack(randomTrackNumber);
        this.props.slider.slickGoTo(randomTrackNumber);
      }
      // If repeat button is active replay track
      else if (this.props.repeatActive) {
        this.props.repeatTrack();
      } else {
        this.props.nextTrack();
        this.props.slider.slickNext();
      }
    }
  }

  // Clear duration interval
  componentWillUnmount() {
    if (this.trackDurationInterval !== null) {
      clearInterval(this.trackDurationInterval);
    }
  }

  // Function for converting seconds to mm:ss format
  formatSeconds(value) {
    let mins = Math.floor((value / 60) % 60);
    let secs = Math.floor(value - mins * 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;

    return `${mins}:${secs}`;
  }

  render() {
    const {
      slider,
      trackPlaying,
      shuffleActive,
      repeatActive,
      tracks,
      currentTrack,
      currentDuration,
    } = this.props;

    // Calculate track duration progress
    let durationProgress = (currentDuration / tracks[currentTrack].duration) * 100;
    if (durationProgress > 100) durationProgress = 100;

    // Format seconds to mm:ss
    const currentDurationFormatted = this.formatSeconds(currentDuration);
    const trackDurationFormatted = this.formatSeconds(tracks[currentTrack].duration);

    return (
      <section className="controls">
        <div className="controls-container">
          <a href="#!" className="shuffle-btn">
            <img
              src={ShuffleIcon}
              onClick={() => this.props.shuffle()}
              className={`control-item ${shuffleActive ? "active" : "inactive"}`}
              alt="Shuffle play"
            />
          </a>

          <a href="#!">
            <img
              src={PreviousIcon}
              onClick={() => {
                this.props.previousTrack();
                slider.slickPrev();
              }}
              className="control-item"
              alt="Previus track"
            />
          </a>

          <a href="#!" className="play-btn">
            <img
              src={PlayActiveIcon}
              className={`${trackPlaying ? "active" : "inactive"}`}
              onClick={() => this.props.playPauseTrack()}
              alt="Play"
            />
            <img
              src={PlayInactiveIcon}
              className={`${trackPlaying ? "inactive" : "active"}`}
              onClick={() => this.props.playPauseTrack()}
              alt="Stop"
            />
          </a>

          <a href="#!">
            <img
              src={NextIcon}
              onClick={() => {
                this.props.nextTrack();
                slider.slickNext();
              }}
              className="control-item"
              alt="Next track"
            />
          </a>

          <a href="#!">
            <img
              src={RepeatIcon}
              onClick={() => this.props.repeat()}
              className={`control-item ${repeatActive ? "active" : ""}`}
              alt="Repeat this track"
            />
          </a>
        </div>

        <div className="progress-bar-container">
          <p className="duration-info">{currentDurationFormatted}</p>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${durationProgress}%` }}></div>
          </div>

          <p className="duration-info">{trackDurationFormatted}</p>
        </div>

        <img src={Waveform} className="waveform" alt="Waveform" />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    slider: state.player.sliderRef,
    trackPlaying: state.player.trackPlaying,
    shuffleActive: state.player.shuffle,
    repeatActive: state.player.repeat,
    tracks: state.player.tracks,
    currentTrack: state.player.currentTrack,
    currentDuration: state.player.currentDuration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playPauseTrack: () => dispatch(playPauseTrack()),
    nextTrack: () => dispatch(nextTrack()),
    previousTrack: () => dispatch(previousTrack()),
    shuffle: () => dispatch(shuffle()),
    repeat: () => dispatch(repeat()),
    incrementDuration: () => dispatch(incrementDuration()),
    repeatTrack: () => dispatch(repeatTrack()),
    goToTrack: (trackNumber) => dispatch(goToTrack(trackNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
