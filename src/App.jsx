import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
