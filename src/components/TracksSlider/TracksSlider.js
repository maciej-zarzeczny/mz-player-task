import React from "react";
import { connect } from "react-redux";
import { addSliderRef } from "../../redux/actions/PlayerActions";
import "./TracksSlider.scss";
import Track from "./TrackCover/TrackCover";
import Slider from "react-slick";

class TracksSlider extends React.Component {
  render() {
    const { tracks, currentTrack, addSliderRef } = this.props;

    const sliderSettings = {
      infinite: true,
      draggable: false,
      slidesToShow: 1,
      speed: 300,
    };

    const covers = tracks.map((track, idx) => {
      return <Track img={track.coverImage} idx={idx} currentTrack={currentTrack} key={idx} />;
    });

    return (
      <section>
        <Slider ref={(c) => addSliderRef(c)} {...sliderSettings}>
          {covers}
        </Slider>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.player.tracks,
  currentTrack: state.player.currentTrack,
});

const mapDispatchToProps = (dispatch) => ({
  addSliderRef: (ref) => dispatch(addSliderRef(ref)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksSlider);
