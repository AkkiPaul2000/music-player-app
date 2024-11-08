import React from 'react';
import SongItem from './SongItem';

function SongList({ songs }) {
  return (
    <div>
      {songs.map((song, index) => (
        <SongItem key={song.track.id} song={song.track} index={index} />
      ))}
    </div>
  );
}

export default SongList;
