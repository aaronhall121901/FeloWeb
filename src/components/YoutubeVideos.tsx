import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css"; // Ensure the CSS file is imported

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "YOUR_API_KEY"; // YouTube API key
  const CHANNEL_ID = "UCua2C1VPx_NNVGt8cgSqzmA"; // Channel ID
  const CACHE_KEY = "youtube_videos";
  const CACHE_EXPIRATION = 60 * 60 * 1000; // 1 hour

  useEffect(() => {
    const fetchVideos = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cacheTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
      const now = new Date().getTime();

      if (
        cachedData &&
        cacheTimestamp &&
        now - parseInt(cacheTimestamp) < CACHE_EXPIRATION
      ) {
        setVideos(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
          );
          setVideos(response.data.items);
          localStorage.setItem(CACHE_KEY, JSON.stringify(response.data.items));
          localStorage.setItem(`${CACHE_KEY}_timestamp`, now.toString());
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error("AxiosError:", error);
            if (error.response) {
              console.error("Error response data:", error.response.data);
              setError(
                `Error: ${error.response.status} - ${error.response.statusText}`
              );
            } else if (error.request) {
              console.error("Error request data:", error.request);
              setError("Error: No response from server.");
            } else {
              console.error("Error message:", error.message);
              setError(`Error: ${error.message}`);
            }
          } else {
            console.error("Unexpected error:", error);
            setError("Unexpected error occurred.");
          }
        }
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2 className="center-text">Recent Videos</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="videos">
          {videos.map((video: any) => (
            <div key={video.id.videoId} className="video">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideos;
