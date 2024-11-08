import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from '../components/Player/SongList';

function Playlist() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('/api/spotify/playlists');
        setSongs(response.data.tracks.items);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div>
      <h2>My Playlist</h2>
      <SongList songs={songs} />
    </div>
  );
}

export default Playlist;
