import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CelestialBody from "./components/CelestialBody";
import Eberron from "./components/Eberron";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh", zIndex: -1}} className="model-container">
            <Canvas className="model">
                <color attach="background" args={['black']} />
                <ambientLight />
                <pointLight position={[0, 0, 0]} />
                <CelestialBody position={[-30, -30, -30]} color="hotpink" />
                <CelestialBody position={[-25, -25, -25]} color="hotpink"/>
                <CelestialBody position={[-20, -20, -20]} color="hotpink"/>
                <CelestialBody position={[-15, -15, -15]} color="hotpink"/>
                <CelestialBody position={[-10, -10, -10]} color="hotpink"/>
                <CelestialBody position={[-5, -5, -5]} color="hotpink"/>
                <Eberron />
                <CelestialBody position={[30, 30, 30]} color="hotpink"/>
                <CelestialBody position={[25, 25, 25]} color="hotpink"/>
                <CelestialBody position={[20, 20, 20]} color="hotpink"/>
                <CelestialBody position={[15, 15, 15]} color="hotpink"/>
                <CelestialBody position={[10, 10, 10]} color="hotpink"/>
                <CelestialBody position={[5, 5, 5]} color="hotpink"/>
                <OrbitControls makeDefault />
            </Canvas>
        </div>
    );
};

export default App;