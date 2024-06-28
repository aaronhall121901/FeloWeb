import React from "react";
import "./HomePage.css";
import YouTubeVideos from "./YoutubeVideos";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <h1>Welcome to the Home Page</h1>
      <YouTubeVideos />
    </div>
  );
};

export default HomePage;
