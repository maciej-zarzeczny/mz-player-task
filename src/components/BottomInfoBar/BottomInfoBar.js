import React from "react";
import "./BottomInfoBar.scss";

import PlaylistIcon from "../../assets/images/playlist_ico.svg";

function BottomInfoBar() {
  return (
    <section className="bottom-info-bar">
      <img src={PlaylistIcon} className="playlist-button" alt="Playlist" />

      <div className="next-track-info">
        <p className="next-track">Next</p>
        <p className="next-track-title">Livin' In A Movie</p>
      </div>

      <p className="next-track-duration">3:27</p>
    </section>
  );
}

export default BottomInfoBar;
