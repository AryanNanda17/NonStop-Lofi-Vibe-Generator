import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AudioBars = ({ dataArray }) => {
  const bars = useRef([]);

  const createBars = () => {
    const newBars = [];
    for (let i = 0; i < dataArray.length; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshPhongMaterial({ color: "#00ff00" });
      const bar = new THREE.Mesh(geometry, material);
      bar.position.x = i;
      newBars.push(bar);
    }
    bars.current = newBars;
  };

  useEffect(() => {
    createBars();
  }, []);

  useFrame(() => {
    for (let i = 0; i < dataArray.length; i++) {
      const scaleY = (dataArray[i] / 255) * 10; // Adjust the scale factor as needed
      bars.current[i].scale.y = scaleY;
    }
  });

  return (
    <group>
      {bars.current.map((bar, index) => (
        <mesh key={index} position={[index - dataArray.length / 2, 0, 0]}>
          {bar}
        </mesh>
      ))}
    </group>
  );
};

const Visualizer = () => {
  const audio = useRef();
  const dataArray = useRef(new Uint8Array(0));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;

    const src = audioContext.createMediaElementSource(audio.current);
    src.connect(analyser);
    analyser.connect(audioContext.destination);

    dataArray.current = new Uint8Array(analyser.frequencyBinCount);

    const updateDataArray = () => {
      analyser.getByteFrequencyData(dataArray.current);
    };

    audio.current.addEventListener("play", () => {
      const intervalId = setInterval(updateDataArray, 16); // Adjust the interval as needed
      return () => clearInterval(intervalId);
    });

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [audio]);

  const handlePlay = () => {
    if (!isPlaying) {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <button onClick={handlePlay}>Play Audio</button>
      <audio ref={audio} controls loop>
        <source src="./Beats.mp3" type="audio/mp3" />
      </audio>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AudioBars dataArray={dataArray.current} />
      </Canvas>
    </>
  );
};

export default Visualizer;
