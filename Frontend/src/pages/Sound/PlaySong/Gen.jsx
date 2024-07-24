import React, { useState } from "react";
import { decode, generate } from "../../api.ts";

const MusicGenerator = () => {
  const [generatedMusic, setGeneratedMusic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateMusic = () => {
    setIsLoading(true);
    setError(null);

    decode()
      .then((outputParams) => {
        setGeneratedMusic(outputParams);
      })
      .catch((error) => {
        setError(error.message || "Failed to generate music");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleGenerateMusic} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Music"}
      </button>
      {error && <p>{error}</p>}
      {generatedMusic && (
        <div>
          {/* Display generated music or use it in your application */}
          <p>Generated Music: {JSON.stringify(generatedMusic)}</p>
        </div>
      )}
    </div>
  );
};

export default MusicGenerator;
