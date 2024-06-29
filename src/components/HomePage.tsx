import React from "react";
import "./HomePage.css";
import YouTubeVideos from "./YoutubeVideos";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <YouTubeVideos />
    </div>
  );
};

export default HomePage;
