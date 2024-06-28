import React from "react";
import profileImage from "./assets/tfel.jpg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div id="about-me-page">
      {" "}
      {/* Add the "about-me-page" id here */}
      <section className="about-me">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Tyler "FeLo" Johnson, a professional Call of Duty player
            currently representing the Carolina Royal Ravens in the Call of Duty
            League. With years of experience and a passion for competitive
            gaming, I've dedicated myself to mastering the craft of Call of
            Duty. My journey in esports began with a dream and a controller,
            evolving through countless tournaments, team changes, and
            unforgettable moments on stage. As a proud member of the Carolina
            Royal Ravens, I strive to bring my best performance to every match,
            aiming for excellence and pushing the boundaries of what's possible
            in the game. Join me on my journey as I continue to compete, grow,
            and share my passion for gaming with fans around the world. Thank
            you for your support and for being a part of this incredible
            adventure!
          </p>
        </div>
      </section>
      <div className="image-gallery">
        <img src={image1} alt="Image 1" className="gallery-image" />
        <img src={image2} alt="Image 2" className="gallery-image" />
        <img src={image3} alt="Image 3" className="gallery-image" />
        <img src={image4} alt="Image 4" className="gallery-image" />
      </div>
    </div>
  );
};

export default AboutMePage;
