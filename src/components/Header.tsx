import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/class-setups">Class Setups</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <a
              href="https://example.com/matches"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matches
            </a>
          </li>
          <li>
            <a
              href="https://example.com/stream"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stream
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
