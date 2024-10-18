import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./sound.css";
import { FaPlay, FaPause } from "react-icons/fa";

// Custom hook for audio logic
function useAudio(playlist) {
  const [audio, setAudio] = useState(null);
  const [audioLoader, setAudioLoader] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadSong = useCallback(
    (url) => {
      if (audioLoader && audio) {
        audio.stop();
        audioLoader.load(
          url,
          (buffer) => {
            audio.setBuffer(buffer);
            audio.setLoop(false);
            setIsLoaded(true);
            if (isPlaying) {
              audio.play();
            }
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => {
            console.error("An error occurred while loading audio:", error);
            setCurrentSongIndex(
              (prevIndex) => (prevIndex + 1) % playlist.length
            );
          }
        );
      }
    },
    [audio, audioLoader, isPlaying, playlist.length]
  );

  const togglePlay = useCallback(() => {
    if (audio) {
      if (!isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
      setIsPlaying(!isPlaying);
    }
  }, [audio, isPlaying]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); 
        togglePlay(); 
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [togglePlay]);

  useEffect(() => {
    if (audio && audioLoader) {
      loadSong(playlist[currentSongIndex]);

      audio.onEnded = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
      };
    }
  }, [currentSongIndex, audio, audioLoader, loadSong, playlist]);

  return {
    audio,
    setAudio,
    audioLoader,
    setAudioLoader,
    isPlaying,
    togglePlay,
    isLoaded,
  };
}

const Sound = () => {
  const refContainer = useRef(null);
  const playlist = [
    "./music1.mp3",
    "./music2.mp3",
    "./music3.mp3",
    "./music4.mp3",
    "./music5.mp3",
    "./music6.mp3",
  ];
  const { setAudio, setAudioLoader, isPlaying, togglePlay } =
    useAudio(playlist);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.pointerEvents = "none";
    refContainer.current &&
      refContainer.current.appendChild(labelRenderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const params = {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
      threshold: 0.5,
      strength: 0.5,
      radius: 0.8,
    };

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight)
    );
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    const originalColor = new THREE.Color(
      params.red,
      params.green,
      params.blue
    );

    const outputPass = new OutputPass();
    bloomComposer.addPass(outputPass);

    camera.position.set(0, -2, 14);
    camera.lookAt(0, 0, 0);

    const uniforms = {
      u_time: { type: "f", value: 0.0 },
      u_frequency: { type: "f", value: 0.0 },
      u_red: { type: "f", value: 1.0 },
      u_green: { type: "f", value: 1.0 },
      u_blue: { type: "f", value: 1.0 },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
      uniform float u_time;

      vec3 mod289(vec3 x)
      {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 mod289(vec4 x)
      {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      
      vec4 permute(vec4 x)
      {
        return mod289(((x*34.0)+10.0)*x);
      }
      
      vec4 taylorInvSqrt(vec4 r)
      {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      
      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      // Classic Perlin noise, periodic variant
      float pnoise(vec3 P, vec3 rep)
      {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      uniform float u_frequency;

      void main() {
          float noise = 3.0 * pnoise(position + u_time, vec3(10.0));
          float displacement = (u_frequency / 30.) * (noise / 10.);
          vec3 newPosition = position + normal * displacement;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
      `,
      fragmentShader: `
      uniform float u_red;
        uniform float u_blue;
        uniform float u_green;
        void main() {
            gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1. );
        }
      `,
    });

    const geo = new THREE.IcosahedronGeometry(4, 30);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    mesh.material.wireframe = true;

    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    setAudio(sound);
    setAudioLoader(loader);

    const analyser = new THREE.AudioAnalyser(sound, 32);

    let mouseX = 0;
    let mouseY = 0;
    refContainer.current.addEventListener("mousemove", function (e) {
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / 100;
      mouseY = (e.clientY - windowHalfY) / 100;
    });

    const handleKeyDown = (event) => {
      // Check if the pressed key is the spacebar (keyCode 32)
      if (event.keyCode === 32) {
        togglePlay();
      }
    };

    const clock = new THREE.Clock();
    function animate() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.5;
      camera.lookAt(scene.position);
      labelRenderer.render(scene, camera);
      const colorStrength = 0.5; // Adjust the strength of the color change
      uniforms.u_red.value = originalColor.r + colorStrength * mouseX;
      uniforms.u_green.value = originalColor.g + colorStrength * mouseY;
      uniforms.u_blue.value = originalColor.b - colorStrength * mouseX;
      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_frequency.value = analyser.getAverageFrequency();
      bloomComposer.render();
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("keydown", handleKeyDown);

    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Effect cleanup
    return () => {
      if (sound) {
        sound.stop();
      }
      window.removeEventListener("resize", () => {});
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setAudio, setAudioLoader]);

  return (
    <motion.div
      className="webgl relative"
      ref={refContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0, 36, 1] }}
    >
      <Navbar />
      <motion.button
        className="fixed md:bottom-8 md:right-8 bottom-8 right-1 bg-purple-600 hover:bg-purple-700 text-white md:p-4 p-3 rounded-full shadow-lg z-50 flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <FaPause />
        ) : (
          <>
            <FaPlay />
          </>
        )}
      </motion.button>
      <div className="controls absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-full text-center mt-32">
          <div className="p-4 text-center lg:text-9xl uppercase text-8xl tracking-widest mx-4 lg:mx-40 lg:mt-32 text-white">
            {"LofiVibe".split(" ").map((word, index) => {
              return word === " " ? (
                <div className="head" key={index}>
                  &nbsp;
                </div>
              ) : (
                <div className="head" key={index}>
                  {word}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="lg:mt-12 mx-4 text-2xl lg:text-2xl mt-24">
            <button className="mb-3 lg:mb-5 lg:mr-6 p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300">
              <Link to="/experience" className="ml-1 mr-6 text-center">
                Music Experience
              </Link>
            </button>
            <br className="lg:hidden" />
            <button className="p-2 lg:p-4 rounded-md bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300">
              <Link to="https://lofivibe-oaptuqixw-aryannanda17s-projects.vercel.app/">
                AI Generated Music
              </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sound;
