import React, { useState } from "react";
import Plot from "react-plotly.js";

const LatentSpace = () => {
  // Function to generate random data for demonstration purposes
  const generateRandomData = () =>
    Array.from({ length: 100 }, () => ({
      x: Math.random() * 8 - 1,
      y: Math.random() * 8 - 1,
    }));

  // State to track the positions of particles
  const [data, setData] = useState(generateRandomData);

  // Update particle positions on user interaction (relayout)
  const handleRelayout = (event) => {
    if (event && event.dragmode === "select") {
      const updatedData = generateRandomData();
      setData(updatedData);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        <Plot
          data={[
            {
              type: "scattergl", // Use scattergl for WebGL rendering
              mode: "markers",
              x: data.map((point) => point.x),
              y: data.map((point) => point.y),
              marker: { size: 9 },
            },
          ]}
          layout={{
            title: "Latent Space",
            xaxis: { visible: false },
            yaxis: { visible: false },
            height: 450,
            font: { color: "white" },
            width: 400,
            paper_bgcolor: "black",
            plot_bgcolor: "black",
            dragmode: "select", // Enable selection for dragging
          }}
          onRelayout={handleRelayout} // Handle particle movement on relayout
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <button
            className="text-white ml-12 p-4 bg-blue-600 text-xl rounded-md"
            onClick={() => setData(generateRandomData())}
          >
            Reload Latent Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatentSpace;
