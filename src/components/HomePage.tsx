import React from "react";
import "./HomePage.css";
import YouTubeVideos from "./YoutubeVideos";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1 className="center-text">Welcome to TFel Enterprises</h1>
        <hr className="border" />
        <YouTubeVideos />
      </div>
    </div>
  );
};

export default HomePage;
