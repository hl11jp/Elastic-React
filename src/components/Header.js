import React from "react";
import "../css/Header.css";

const Header = () => {
  return(
    <header className="header">
      <h3>iuuukhueeee</h3>
      <nav>
        <ul className="header--items">
          <li><a href="./About.js">About</a></li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;