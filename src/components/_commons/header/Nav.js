import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="header">
        <a href="/" class="logo">
          TalentBait | Post job ads on social media
        </a>

        <div class="header-button-container">
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
