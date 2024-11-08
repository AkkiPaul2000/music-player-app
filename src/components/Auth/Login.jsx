import React from 'react';

function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/login'; // Redirect to backend for Spotify login
  };

  return (
    <div>
      <h2>Welcome to DreamMusic</h2>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
}

export default Login;
