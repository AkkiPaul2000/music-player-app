import React from 'react';

function SongItem({ song, index }) {
  return (
    <div className="song-item">
      <span>{index + 1}. {song.name} - {song.artists[0].name}</span>
    </div>
  );
}

export default SongItem;
