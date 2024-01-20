import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./spectro.css";

const Spectrogram = () => {
  const ref = useRef(null);

  useEffect(() => {
    let frequency_samples = 512; // Y resolution
    let DATA = new Uint8Array(frequency_samples); // for later
    let camera, scene, renderer;
    let heights, mesh;
    let time_samples = 1200; // X resolution
    let n_vertices = (frequency_samples + 1) * (time_samples + 1);
    let xsegments = time_samples;
    let ysegments = frequency_samples;
    let xsize = 35;
    let ysize = 20;
    let xhalfSize = xsize / 2;
    let yhalfSize = ysize / 2;
    let xsegmentSize = xsize / xsegments; //Size of one square
    let ysegmentSize = ysize / ysegments;

    init();

    function init() {
      // Place the camera in space
      camera = new THREE.PerspectiveCamera(
        27,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 64;
      scene = new THREE.Scene();
      let geometry = new THREE.BufferGeometry();
      let indices = [];
      heights = [];
      let vertices = [];

      // generate vertices for a simple grid geometry
      for (let i = 0; i <= xsegments; i++) {
        let x = i * xsegmentSize - xhalfSize; //midpoint of mesh is 0,0
        for (let j = 0; j <= ysegments; j++) {
          let y = j * ysegmentSize - yhalfSize;
          vertices.push(x, y, 0);
          heights.push(0); // for now our mesh is flat, so heights are zero
        }
      }
      // Add the position data to the geometry buffer
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      // generate indices (data for element buffer). This says where each triangle goes
      // the code might look complex, but it is essentially the way you tile the plane with
      // triangles. Each square segment has 4 vertices, a, b, c, d. Which make 2 triangles.
      // a  b
      // d  c
      // Looking above, we can make a triangle by connecting a b d
      // a-b
      // d
      // and similarly for b c d. These make the two faces of our mesh segment.

      for (let i = 0; i < xsegments; i++) {
        for (let j = 0; j < ysegments; j++) {
          let a = i * (ysegments + 1) + (j + 1);
          let b = i * (ysegments + 1) + j;
          let c = (i + 1) * (ysegments + 1) + j;
          let d = (i + 1) * (ysegments + 1) + (j + 1);
          // generate two faces (triangles) per iteration
          indices.push(a, b, d); // face one
          indices.push(b, c, d); // face two
        }
      }
      geometry.setIndex(indices);

      // Initialize the renderer and connect it to the DIV
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      let container = ref.current;
      container && container.appendChild(renderer.domElement);

      // Give the mesh a material with color (Purple)
      let material = new THREE.MeshBasicMaterial({ color: "#433F81" });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Render the scene!
      renderer.render(scene, camera);
    }
  }, []);
  return <div ref={ref}></div>;
};

export default Spectrogram;
