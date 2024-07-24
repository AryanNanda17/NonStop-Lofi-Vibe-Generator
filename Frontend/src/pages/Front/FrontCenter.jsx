import React from "react";

const FrontCenter = () => {
  return (
    <div className="bg-black p-6">
      <div className="text-white text-center">
        <h1 className="uppercase text-center text-4xl lg:text-8xl tracking-wider mt-16 lg:mt-56">
          Your Personalised Mood Maestro
        </h1>
        <div
          style={{
            position: "relative",
            width: "50%",
            margin: "0 auto",
            marginTop: "270px",
          }}
        >
          <video
            controls
            autoPlay={false}
            loop={false}
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <source src="/video/front-page-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FrontCenter;
