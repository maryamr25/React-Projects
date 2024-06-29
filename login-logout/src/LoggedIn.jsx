// src/LoggedIn.jsx
import React from 'react';

function LoggedIn({ onLogout }) {
  return (
    // <div>
    //   <h1>You are logged in!</h1>
    //   <button onClick={onLogout}>Logout</button>
    // </div>

    <div>
      <h1>LogIn Form</h1>
      <form>
        <label>User Name :</label>
      <input type='text' placeholder='Enter Name'/>
      <br />
      <br />

      <label>Password :</label>
      <input type='text' placeholder='Enter Password'/>
      <br />
      <br />

      <label>Conform Password :</label>
      <input type='text' placeholder='Conform Password'/>
      <br />
      <br />

      <button onClick={onLogout}>LogIn</button>
      </form>
    </div>
    
  );
}

export default LoggedIn;