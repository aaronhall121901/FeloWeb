import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyASk5HxMNaCTWs-Tv414am0fCSKMzhS6iU"; // YouTube API key
  const CHANNEL_ID = "UCua2C1VPx_NNVGt8cgSqzmA"; // Channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Recent Videos</h2>
      <div className="videos">
        {videos.map((video: any) => (
          <div key={video.id.videoId} className="video">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
