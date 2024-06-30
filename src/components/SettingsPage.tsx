import React from "react";
import "./SettingsPage.css";

const videoId = "_YB7F4eFVUE"; // Replace with your actual YouTube video ID
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

const SettingsPage: React.FC = () => {
  return (
    <div className="main-background">
      <section className="settings">
        <h2>Settings</h2>
        <hr className="separator" />
        <div className="youtube-thumbnail-container">
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailUrl} alt="YouTube Thumbnail" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
