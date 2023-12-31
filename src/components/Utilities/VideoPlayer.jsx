"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const options = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-5 right-3 md:bottom-3">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1">
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={options}
          onError={() => alert("Video is Broken, please try another")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-8 right-5 w-32 bg-color-primary text-color-dark text-md hover:bg-color-accent transition-all rounded-lg">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
