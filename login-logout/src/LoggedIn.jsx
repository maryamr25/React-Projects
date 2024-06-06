// src/LoggedIn.jsx
import React from 'react';

function LoggedIn({ onLogout }) {
  return (
    <div>
      <h1>You are logged in!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default LoggedIn;