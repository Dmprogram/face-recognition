import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./logo.css";
const Logo = () => {
  return (
    <div className="content">
      <Tilt
        className="Tilt br2 shadow-2"
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "8px" }} src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
