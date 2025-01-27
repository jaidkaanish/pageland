import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const GLBModel = ({ modelPath, scale, position }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);

  // Play the animation
  useEffect(() => {
    if (actions && actions.Animation) {
      actions.Animation.play();
    }
  }, [actions]);

  return (
    <>
      {/* Configure OrbitControls for smooth zooming and interaction */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        zoomSpeed={0.6} // Adjust zoom speed for smoother scrolling
        minDistance={3} // Minimum zoom distance
        maxDistance={15} // Maximum zoom distance
        dampingFactor={0.1} // Adds smooth damping to controls
      />

      {/* Improved Lighting Setup */}
      <ambientLight intensity={1} /> {/* Soft overall light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, 5]} intensity={1} />
      <pointLight position={[5, -5, -5]} intensity={1} />

      {/* Scale and position the model */}
      <group ref={group} scale={scale} position={position}>
        <primitive object={scene} />
      </group>
    </>
  );
};

export default GLBModel;