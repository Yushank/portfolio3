"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const ModelCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);

  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  // const [modelRotation, setModelRotation] = useState({ x: 0, y: 0, z: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const container = containerRef.current;

    if (!container) {
      return;
    }

    //CAMERA
    const camera = new THREE.PerspectiveCamera(
      8,
      container?.offsetWidth / container?.offsetHeight,
      0.1,
      1000,
    ); //fov, aspect, near, far

    camera.position.set(0, 0, 10); //x,y,z

    //RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(devicePixelRatio);
    container.appendChild(renderer.domElement); //making renderer render inside container as child

    //LIGHT
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5); //color, intensity
    directionalLight.position.set(1, 1, 0); //x,y,z

    scene.add(directionalLight);

    //LOADER
    const loader = new GLTFLoader();

    let modelBaseRotationX = 0;
    let modelBaseZ = -1;
    let animationId: number;

    loader.load("/assets/low_poly_face.glb", (gltf) => {
      if (!container.isConnected) return;

      modelRef.current = gltf.scene;

      const standardMaterial = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        roughness: 0.4, // 0 is shiny, 1 is rough
        metalness: 0.1, // 0 is plastic/wood, 1 is metal
      });
      modelRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = standardMaterial;
        }
      });

      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      modelRef.current.position.sub(center);
      modelRef.current.position.set(0, 0, -1);

      //for normalizing scale we find the biggest side and scale according to that
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1 / maxDim;
      modelRef.current.scale.setScalar(scale);

      scene.add(modelRef.current);
    });

    function animate() {
      animationId = requestAnimationFrame(animate);

      const { x: mouseY, y: mouseX } = targetRotationRef.current;
      const baseRotationY = Math.PI;
      const targetRotationY = baseRotationY + mouseX;
      const targetRotationX = mouseY + modelBaseRotationX;

      if (modelRef.current) {
        modelRef.current.rotation.y +=
          (targetRotationY - modelRef.current.rotation.y) * 0.05;
        modelRef.current.rotation.x +=
          (targetRotationX - modelRef.current.rotation.x) * 0.05;
        modelRef.current.position.z +=
          (modelBaseZ - modelRef.current.position.z) * 0.05;
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      modelRef.current = null;
    };
  }, []);

  //to make the animation based on mouse move
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    //The position of mouse on the event div (card-container div)
    const deltaX = (event.clientX - centerX) / (rect.width / 2);
    const deltaY = (event.clientY - centerY) / (rect.height / 2);

    setRotation({
      x: 60,
      y: deltaX * 60,
      z: deltaX,
    });
  };

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
      z: 0,
    });
  };

  const handleMouseModel = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    targetRotationRef.current = { x: mouseY, y: mouseX };
  };

  const handleModelLeave = () => {
    targetRotationRef.current = {
      x: 0,
      y: 0,
    };
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        onMouseMove={handleMouseModel}
        onMouseLeave={handleModelLeave}
        className="w-160 h-160 flex items-center justify-center"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-120 h-120 flex items-center justify-center rounded-lg border border-blue-200 bg-[repeating-linear-gradient(315deg,#BFDBFE_0,#BFDBFE_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px]"
          style={{
            perspective: "1000px",
          }}
        >
          {/* CARD */}
          <div
            className="w-60 h-80 border-2 border-green-500 bg-gray-50 rounded-lg transition-transform duration-100 ease-out"
            ref={containerRef}
            style={{
              transform: `rotateZ(${rotation.z}deg) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
