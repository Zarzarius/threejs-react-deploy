import React from "react";
import Bulb from "./Bulb";

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight
                shadow-mapSize-height={2 ** 10}
                shadow-mapSize-width={2 ** 10}
                shadow-radius={10}
                castShadow
                intensity={1}
                position={[6, 3, 0]}
            />
            <Bulb position={[6, 3, 0]} />
            <Bulb position={[0, 3, 0]} />
            <Bulb position={[-6, 3, 0]} />
        </>
    );
};

export default Lights;
