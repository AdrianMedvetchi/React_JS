import React from 'react';
import '../CSS/Heading.css';

function Heading() {
  return (
    <div className="heading">
      <div className="heading_image hidden">
        <img className="image hidden" src="/img/img1.svg" alt="main_img" />
      </div>
      <div className="heading_title">
        <div className="decoration"></div>
        <div className="brand_title">
          <span className="brand-title">THE BRAND</span> <br />
          <span className="brand-subtitle-accent">OF LUXURIOUS </span>
          <span className="brand-subtitle">FASHION</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;
