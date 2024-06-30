import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="main-content">
        <p>&copy; {currentYear} Tfel Enterprises</p>
      </div>
    </footer>
  );
};

export default Footer;
