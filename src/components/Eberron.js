import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import EberronTexture from "../../images/eberron.jpg"; // Credit: https://www.reddit.com/r/Eberron/comments/ermt2e/eberron_reimagined/

function Eberron(props) {
    const texture = useLoader(THREE.TextureLoader, EberronTexture);
    return (
    <group>
        <mesh position={[0,0,0]}>
            <sphereGeometry args={[2.5, 32, 32]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
        <mesh
            visible
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            castShadow>
                <ringBufferGeometry args={[1, 4, 32]} />
                <meshBasicMaterial attach="material" color="yellow" />
        </mesh>
    </group>
    );     
}

export default Eberron;