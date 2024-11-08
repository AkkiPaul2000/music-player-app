import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/playlist">My Playlist</Link>
    </header>
  );
}

export default Header;
