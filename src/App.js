import React from "react";
import { Canvas } from "@react-three/fiber";

function App() {
    return (
        <div>
            <h1>Eberron Cosmology Model</h1>
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    );
};

export default App;