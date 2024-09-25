import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;

float squared(float value) { return value * value; }

float getAmp(float frequency) { return texture(iChannel0, vec2(frequency / 512.0, 0)).x; }

float getWeight(float f) {
    return (+ getAmp(f-2.0) + getAmp(f-1.0) + getAmp(f+2.0) + getAmp(f+1.0) + getAmp(f)) / 5.0; }

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
	vec2 uvTrue = fragCoord.xy / iResolution.xy;
    vec2 uv = -1.0 + 2.0 * uvTrue;
    
	float lineIntensity;
    float glowWidth;
    vec3 color = vec3(0.0);
    
	for(float i = 0.0; i < 5.0; i++) {
        
		uv.y += (0.2 * sin(uv.x + i/7.0 - iTime * 0.6));
        float Y = uv.y + getWeight(squared(i) * 20.0) *
            (texture(iChannel0, vec2(uvTrue.x, 1)).x - 0.5);
        lineIntensity = 0.4 + squared(1.6 * abs(mod(uvTrue.x + i / 1.3 + iTime,2.0) - 1.0));
		glowWidth = abs(lineIntensity / (150.0 * Y));
		color += vec3(glowWidth * (2.0 + sin(iTime * 0.13)),
                      glowWidth * (2.0 - sin(iTime * 0.23)),
                      glowWidth * (2.0 - cos(iTime * 0.19)));
	}	
	
	fragColor = vec4(color, 1.0);
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

  const noiseTexture1 = useTexture("/images/noise3.png");
  const noiseTexture2 = useTexture("/images/download.png");

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
        value: noiseTexture2,
      },
      iChannel1: {
        type: "t",
        value: noiseTexture1,
      },
    }),
    []
  );

  return (
    <mesh ref={meshref}>
      <planeGeometry args={[2, 4]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const Wave = () => {
  return (
    <>
    <audio controls={false} loop autoPlay>
      <source src="./music3.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </Canvas>
  </>
  );
};

export default Wave;
