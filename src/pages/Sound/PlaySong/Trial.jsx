import React, { useState } from "react";

function App() {
  const [generatedMusicLink, setGeneratedMusicLink] = useState(null);

  const handleGenerateMusic = async () => {
    try {
      // Adjust the URL based on your Flask server deployment
      const response = await fetch("http://localhost:5000/generate_music", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input_sequence: [
            "C4",
            "E4",
            "G4",
            "D4",
            "F4",
            "A4",
            "G4",
            "B4",
            "D5",
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate music");
      }

      const data = await response.json();
      setGeneratedMusicLink(data.midi_filepath);
    } catch (error) {
      console.error("Error generating music:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateMusic}>Generate Music</button>
      {generatedMusicLink && (
        <div>
          <h2>Generated Music</h2>
          {/* Display the generated music or provide a download link */}
          <audio controls>
            <source src={generatedMusicLink} type="audio/midi" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;
