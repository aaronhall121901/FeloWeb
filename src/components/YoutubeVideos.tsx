import React from "react";
import "./HomePage.css";

interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
}

const YouTubeVideos: React.FC = () => {
  const videos: Video[] = [
    {
      id: "video1",
      url: "https://www.youtube.com/watch?v=UvDSyzYhMuI",
      thumbnail: "https://img.youtube.com/vi/UvDSyzYhMuI/maxresdefault.jpg",
      title:
        "This enemy ranked play squad can't be legal..right?? (MWIII Ranked Play)",
    },
    {
      id: "video2",
      url: "https://www.youtube.com/watch?v=CS8WQG3girE",
      thumbnail: "https://img.youtube.com/vi/CS8WQG3girE/maxresdefault.jpg",
      title:
        "INSANE CLUTCHES WITH OPTIC MBOZE AND NAMELESS (MWIII Ranked Play)",
    },
    {
      id: "video3",
      url: "https://www.youtube.com/watch?v=yiZCKh4jacA",
      thumbnail: "https://img.youtube.com/vi/yiZCKh4jacA/maxresdefault.jpg",
      title: "Reverse Sweeps and 50 Gifted (MW3 Cup Highlight)",
    },
    {
      id: "video4",
      url: "https://www.youtube.com/watch?v=ERekQ4pWgb8",
      thumbnail: "https://img.youtube.com/vi/ERekQ4pWgb8/maxresdefault.jpg",
      title: "BPL 8'S w/ OPTIC KENNY, SCRAP, AND TEMP (MWIII 8's)",
    },
  ];

  return (
    <div>
      <div className="home-page-content"></div>
      <h2 className="center-text">Recent Videos</h2>
      <div className="videos">
        {videos.map((video) => (
          <div key={video.id} className="video">
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
