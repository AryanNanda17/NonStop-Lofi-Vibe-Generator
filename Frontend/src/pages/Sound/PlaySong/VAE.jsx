import React, { useState } from "react";

const VAE = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMusic = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch(`http://localhost:8000/predict?num_sequences=$variable`);
      if (!response.ok) {
        throw new Error("Failed to generate music");
      }
      const musicData = await response.json();
      // Assuming musicData contains the music file or relevant information
      console.log("Generated music:", musicData);
    } catch (error) {
      console.error("Error generating music:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <h1>Deep Learning Music Generator</h1>
      <button onClick={handleGenerateMusic} disabled={isGenerating}>
        {isGenerating ? "Generating..." : "Generate Music"}
      </button>
    </div>
  );
};

export default VAE;
