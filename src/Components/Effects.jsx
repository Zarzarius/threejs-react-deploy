import { useState, useEffect } from "react";
import {
    EffectComposer,
    DepthOfField,
    GodRays,
    Bloom,
} from "react-postprocessing";
import { useThree } from "react-three-fiber";

const Effects = () => {
    const [lights, setLights] = useState(null);
    const { scene } = useThree();

    useEffect(() => {
        if (scene.lights && scene.length === 3) {
            setLights(scene.lights);
        }
    }, [scene.lights]);

    return lights ? (
        <EffectComposer>
            <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={2}
                height={480}
            />
            <Bloom
                luminanceThreshold={0.5}
                luminanceSmoothing={0.9}
                height={300}
            />
            {/* {lights.map((light) => (
                <GodRays sun={light.current} />
            ))} */}
        </EffectComposer>
    ) : null;
};

export default Effects;
