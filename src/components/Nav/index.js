import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
      <ul className="nav nav-pills nav-fill">
        <li className="navbar-brand">
          <a href="/" className="text-white">
            Synthy Clicky Game
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Click on a Synth Pic!
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            Score: {props.scores}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
