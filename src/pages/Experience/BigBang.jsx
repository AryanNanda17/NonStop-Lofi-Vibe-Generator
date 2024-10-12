import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const vertexShader = `
varying vec2 vUv;
void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
    vUv = uv;
}
`;

const fragmentShader = `
uniform vec2 iResolution;
uniform float iTime;

void mainImage(out vec4 o, vec2 F) {
    vec2 R = iResolution.xy;
    o = vec4(0.0, 0.0, 0.0, 1.0);
    for (float d, t = iTime * 0.1, i = 0.; i > -1.; i -= 0.06) {
        d = fract(i - 3. * t);
        vec4 c = vec4((F - R * 0.5) / R.y * d, i, 0) * 28.;
        for (int j = 0; j++ < 27;) {
            c.xzyw = abs(c / dot(c, c) - vec4(7. - 0.2 * sin(t), 6.3, 0.7, 1. - cos(t / 0.8)) / 7.);
        }
        o -= c * c.yzww * d-- * d / vec4(3, 5, 1, 1);
    }
}

void main() {
    vec4 fragColor;
    mainImage(fragColor, gl_FragCoord.xy);
    gl_FragColor = fragColor;
}
`;

const Scene = () => {
  const meshref = useRef();

  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    meshref.current.material.uniforms.iTime.value = time + 20;
  });

  const noiseTexture = useTexture("/images/download.png");

  const uniforms = useMemo(
    () => ({
      iTime: {
        type: "f",
        value: 1.0,
      },
      iResolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iChannel0: {
        type: "t",
        value: noiseTexture,
      },
    }),
    []
  );

  return (
    <mesh ref={meshref}>
      <planeGeometry args={[18, 12]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const BigBang = () => {
  return (
    <>
      <audio controls={false} loop autoPlay>
        <source src="./music1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default BigBang;
