import React from 'react';
import '../stylesCss/App.css';
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className='homeContainer'>
      <img src={logo} className="logoHome" alt="logo" />

    </div>
  )
}

export default Home