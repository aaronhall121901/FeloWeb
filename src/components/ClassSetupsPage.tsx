import React from "react";
import { Link } from "react-router-dom";
import setup1 from "./assets/setup1.jpg";
import setup2 from "./assets/setup2.jpg";
import setup3 from "./assets/setup3.jpg";
import "./ClassSetupsPage.css";

const ClassSetupsPage = () => {
  return (
    <div className="background">
      <section className="class-setups">
        <div className="background">
          <div className="names">
            <h2>Class Setups</h2>
          </div>
          <div className="setups-container">
            <div className="setup-tile">
              <Link to="/class-setup1">
                <img src={setup1} alt="Setup 1" />
                <p>MCW</p>
              </Link>
            </div>
            <div className="setup-tile">
              <Link to="/class-setup2">
                <img src={setup2} alt="Setup 2" />
                <p>Rival 9</p>
              </Link>
            </div>
            <div className="setup-tile">
              <Link to="/class-setup3">
                <img src={setup3} alt="Setup 3" />
                <p>Renetti</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassSetupsPage;
