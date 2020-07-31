import Cover1 from "../../assets/images/cover.png";
import Cover2 from "../../assets/images/unreleased_cover.png";
import Cover3 from "../../assets/images/cover-1.png";

const initState = {
  sliderRef: null,
  tracks: [
    { title: "Title 1", author: "Kanye West", coverImage: Cover1, duration: 218 },
    { title: "Self Conscious", author: "Kanye West", coverImage: Cover2, duration: 5 },
    { title: "Livin' In A Movie", author: "Kanye West", coverImage: Cover3, duration: 217 },
  ],
  currentTrack: 0,
  currentDuration: 0,
  trackPlaying: false,
  repeat: false,
  shuffle: false,
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE_TRACK":
      return {
        ...state,
        trackPlaying: !state.trackPlaying,
      };

    case "NEXT_TRACK":
      let nextTrack = state.currentTrack + 1;
      if (nextTrack > state.tracks.length - 1) {
        nextTrack = 0;
      }

      return {
        ...state,
        currentTrack: nextTrack,
        currentDuration: 0,
      };

    case "PREVIOUS_TRACK":
      let previousTrack = state.currentTrack - 1;
      if (previousTrack < 0) {
        previousTrack = state.tracks.length - 1;
      }

      return {
        ...state,
        currentTrack: previousTrack,
        currentDuration: 0,
      };

    case "ADD_SLIDER_REF":
      return {
        ...state,
        sliderRef: action.payload,
      };

    case "SHUFFLE":
      return {
        ...state,
        shuffle: !state.shuffle,
      };

    case "REPEAT":
      return {
        ...state,
        repeat: !state.repeat,
      };

    case "INCREMENT_CURRENT_DURATION":
      return {
        ...state,
        currentDuration: state.currentDuration + 1,
      };

    case "REPEAT_TRACK":
      return {
        ...state,
        currentDuration: 0,
      };

    case "GO_TO_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
        currentDuration: 0,
      };

    default:
      return state;
  }
};

export default playerReducer;
