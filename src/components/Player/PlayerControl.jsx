import React, { useState } from 'react';
import { Howl } from 'howler';

function PlayerControls({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  let sound;

  const handlePlay = () => {
    if (currentSong.preview_url) {
      sound = new Howl({ src: [currentSong.preview_url] });
      sound.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="player-controls">
      <button onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default PlayerControls;
