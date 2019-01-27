import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div id="logo-container" className="centered-container">
        <h1>Miusik</h1>
        <h3>What's the tune?</h3>
      </div>
    </Link>
  );
};

export default Logo;