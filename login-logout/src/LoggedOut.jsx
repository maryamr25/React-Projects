// src/LoggedOut.jsx
import React from 'react';

function LoggedOut({ onLogin }) {
  return (
    <div>
      <h1>You are logged out!</h1>
      <button onClick={onLogin}>LogOut</button>
    </div>
  );
}

export default LoggedOut;