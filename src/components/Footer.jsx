import React from "react";
import PictureExporter from "./PictureExporter.jsx";

/* using svgs directly rather than using img tag */
const Footer = function () {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://twitter.com/mayur_dayal_5k" target="_blank">
            <span className="twitter-logo">{PictureExporter.twitter}</span>
          </a>
        </li>

        <li>
          <span className="fb-logo">{PictureExporter.facebook}</span>
        </li>

        <li>
          <span className="insta-logo">{PictureExporter.insta}</span>
        </li>

        <li>
          <a href="https://github.com/mayurDayal2000" target="_blank">
            <span className="github-logo">{PictureExporter.github}</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
