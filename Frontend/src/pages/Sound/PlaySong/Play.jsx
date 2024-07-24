import React, { useState } from "react";
import PlayIcon from "./PlayComponent";
import PauseIcon from "./PauseComponent";

const Play = () => {
  const [play, setPlay] = useState(false);
  const [sequences, setSequences] = useState(0);
  const [musicUrl, setMusicUrl] = useState(null);

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleGenerate = async () => {
    if (sequences <= 0) return;
    try {
      const response = await fetch(
        `http://localhost:8000/predict?num_sequences=${sequences}`
      );
      if (!response.ok) {
        throw new Error("Failed to generate music");
      }
      const music = await response.json();
      setMusicUrl(music.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSequences(parseInt(event.target.value));
  };

  return (
    <div className="relative h-screen bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="./video/video.mp4"
        playsInline
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 right-0 text-center text-white mt-8">
        <h1 className="text-white uppercase text-7xl">LofiVibe</h1>
        <span className="text-white mt-8 text-4xl">
          Play Infinite Lofi Music
        </span>
        <br />
        <div className="mt-20">
          <label htmlFor="lofi-sequence" className="text-xl">
            Enter the number of sequences :{" "}
          </label>
          <br />
          <input
            type="number"
            name="sequences"
            id="sequence"
            placeholder=""
            value={sequences}
            className="mt-5 p-1 text-xl text-black"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5">
        <button onClick={handlePlay} className="text-white ml-28">
          {play ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="absolute bottom-0 right-1/2 transform flex items-center justify-between">
        <button
          onClick={handleGenerate}
          className="text-white p-4 bg-blue-600 text-xl rounded-md mb-8 ml-4"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Play;
