import React from "react";
import PictureExporter from "./PictureExporter";
import profileLogo from "../profile.png";

const Header = function () {
  return (
    <header>
      <img src={profileLogo} alt="my profile logo" />

      <h1>Mayur Dayal</h1>
      <h3>Frontend Developer</h3>
      <h4>
        <a href="https://mayurdayal.netlify.app/" target="_blank">
          mayurdayal.netlify.app
        </a>
      </h4>

      <div className="btn-group">
        <button className="email">
          <a href="mailto:mayur.dayal97@gmail.com">
            <span className="btn-logo">{PictureExporter.email}</span>
            <span className="btn-title">Email</span>
          </a>
        </button>
        <button className="linkedin">
          <span className="btn-logo top-position">
            {PictureExporter.linkedin}
          </span>
          <span className="btn-title">Linkedin</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
