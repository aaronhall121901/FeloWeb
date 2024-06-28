import React from "react";
import { Link } from "react-router-dom";
import setup1 from "./assets/setup1.jpg";
//import setup2 from '../assets/setup2.jpg';
//import setup3 from '../assets/setup3.jpg';
import "./ClassSetupsPage.css";

const ClassSetupsPage = () => {
  return (
    <section className="class-setups">
      <h2>Class Setups</h2>
      <div className="setups-container">
        <div className="setup-tile">
          <Link to="/class-setup1">
            <img src={setup1} alt="Setup 1" />
            <p>Setup 1 Description</p>
          </Link>
        </div>
        <div className="setup-tile">
          <Link to="/class-setup2">
            <img src={setup1} alt="Setup 2" />
            <p>Setup 2 Description</p>
          </Link>
        </div>
        <div className="setup-tile">
          <Link to="/class-setup3">
            <img src={setup1} alt="Setup 3" />
            <p>Setup 3 Description</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClassSetupsPage;
