import React from "react";
import "./SettingsPage.css";

const videoId = "_YB7F4eFVUE"; // Replace with your actual YouTube video ID
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

const SettingsPage: React.FC = () => {
  return (
    <section className="settings">
      <h2>Settings</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        magna ac gravida placerat, leo erat bibendum est, a venenatis eros ipsum
        vel dui. Donec aliquet risus vel orci bibendum, vel consectetur tellus
        euismod.
      </p>
      <div className="youtube-thumbnail-container">
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnailUrl} alt="YouTube Thumbnail" />
        </a>
      </div>
    </section>
  );
};

export default SettingsPage;
