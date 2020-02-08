import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="header">
        <a href="/" className="logo">
          TalentBait | Post job ads on social media
        </a>

        <div className="header-button-container">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/create">Create</Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
