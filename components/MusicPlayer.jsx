"use client";
import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const DEFAULT_VOLUME = 0.2;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = DEFAULT_VOLUME;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then(() => {
        audioRef.current.volume = DEFAULT_VOLUME;
      }).catch(error => {
        console.log("Playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={togglePlay}
        className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-black hover:bg-accent/10 transition-all duration-300 animate-float"
        title={isPlaying ? "Pause Music" : "Play Music"}
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        {isPlaying ? (
           <FaPause className="text-accent text-sm" />
        ) : (
          <FaPlay className="text-red-800 text-sm" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        src="/assets/flute.mp3"
      />
    </div>
  );
};

export default MusicPlayer; 