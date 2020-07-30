export const addSliderRef = (ref) => ({
  type: "ADD_SLIDER_REF",
  payload: ref,
});

export const playPauseTrack = () => ({
  type: "PLAY_PAUSE_TRACK",
});

export const nextTrack = () => ({
  type: "NEXT_TRACK",
});

export const previousTrack = () => ({
  type: "PREVIOUS_TRACK",
});

export const shuffle = () => ({
  type: "SHUFFLE",
});

export const repeat = () => ({
  type: "REPEAT",
});

export const incrementDuration = () => ({
  type: "INCREMENT_CURRENT_DURATION",
});

export const repeatTrack = () => ({
  type: "REPEAT_TRACK",
});

export const goToTrack = (trackNumber) => ({
  type: "GO_TO_TRACK",
  payload: trackNumber,
});
