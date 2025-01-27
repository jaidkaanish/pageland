import React from 'react';
import { Canvas } from '@react-three/fiber';
import GLBModel from './GLBModel.jsx';
import model1 from '../assets/model1.glb';
import model2 from '../assets/model2.glb';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Online IDE
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        An online IDE (Integrated Development Environment) is a web-based platform that provides developers with all the necessary tools for writing, editing, compiling, and running code directly within a web browser
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center w-full">
        <div className="w-1/2 h-96 mx-2 my-4 rounded-lg border border-orange-700 shadow-sm shadow-orange-400">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 1000 }} // Adjusted camera settings
            style={{ background: '#333333' }} // Grey background
          >
            <GLBModel modelPath={model1} scale={[2, 2, 2]} position={[2, -1, 0]} />
          </Canvas>
        </div>
        <div className="w-1/2 h-96 mx-2 my-4 rounded-lg border border-orange-700 shadow-sm shadow-orange-400">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 1000 }} // Adjusted camera settings
            style={{ background: '#333333' }} // Grey background
          >
            <GLBModel modelPath={model2} scale={[2, 2, 2]} position={[0, -1, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;