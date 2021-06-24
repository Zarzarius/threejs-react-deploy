import "../App.css";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
extend({ OrbitControls });

const Orbit = () => {
    const { camera, gl } = useThree();
    return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    });
    return (
        <mesh ref={ref} {...props}>
            <boxBufferGeometry />
            <meshPhysicalMaterial color='green' />
        </mesh>
    );
};
function App() {
    return (
        <div style={{ height: "100vh", width: "100vh" }}>
            <Canvas
                style={{ background: "black" }}
                camera={{ position: [3, 3, 3] }}>
                <ambientLight />
                <Orbit />
                <axesHelper args={[5]} />
                <Box position={[1, 1, 0]} />
            </Canvas>
        </div>
    );
}

export default App;
