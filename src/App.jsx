import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Physics } from "use-cannon";

// COMPONENTS
import Orbit from "./Components/Orbit";
import Floor from "./Components/Floor";
import Background from "./Components/Background";
import ColorPicker from "./Components/ColorPicker";
import CameraControls from "./Components/CameraControls";
import CameraButtons from "./Components/CameraButtons";
import Effects from "./Components/Effects";

import Cars from "./Components/Cars";
import Lights from "./Components/Lights";

function App() {
    return (
        <div style={{ height: "100vh", width: "100vh" }}>
            <ColorPicker />
            <CameraButtons />
            <Canvas
                gl={{
                    owerPreference: "high-performance",
                    antialias: false,
                    stencil: false,
                }}
                shadowMap
                style={{ background: "black" }}
                camera={{ position: [7, 7, 7] }}>
                <CameraControls />
                <Lights />
                {/* <fog attach='fog' args={["white", 1, 10]} /> */}
                <Orbit />
                <Suspense fallback={null}>
                    <Background />
                </Suspense>
                <axesHelper args={[5]} />
                <Physics>
                    <Cars />
                    <Floor position={[0, -0.5, 0]} />
                </Physics>
                <Effects />
            </Canvas>
        </div>
    );
}

export default App;
