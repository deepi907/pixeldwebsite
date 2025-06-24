import React, { useState } from 'react';

const SmartNavbar = () => {
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 100) {
      setPercent(value);
    }
  };

  return (
    <div>
      <h2>Enter Progress %</h2>
      <input type="number" onChange={handleChange} value={percent} min="0" max="100" />

      <nav className="pixel-navbar">
        <ul>
          {percent >= 10 && (
            <li><a href="#home">Home</a></li>
          )}
          {percent >= 30 && (
            <li><a href="#projects">Projects</a></li>
          )}
          {percent >= 60 && (
            <li><a href="#tools">Tools</a></li>
          )}
          {percent >= 100 && (
            <>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SmartNavbar;
