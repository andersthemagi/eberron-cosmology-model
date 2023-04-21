import React from "react";

function CelestialBody(props) {
    return (
        <mesh position={props.position}>
            <sphereGeometry args={props.arguments}/>
            <meshStandardMaterial color={props.color}/>
        </mesh>
    )
}

export default CelestialBody;