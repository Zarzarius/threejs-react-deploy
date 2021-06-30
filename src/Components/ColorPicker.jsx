import * as THREE from "three";
import state from "../state";

const ColorPicker = (props) => {
    const handleClick = (e) => {
        if (!state.activeMesh) return;
        state.activeMesh.material.color = new THREE.Color(
            e.target.style.background
        );
    };
    return (
        <div
            style={{
                position: "absolute",
                zIndex: 1,
                top: "20px",
                left: 0,
                right: 0,
                margin: "auto",
                width: "fit-content",
                display: "flex",
            }}>
            <div
                onClick={handleClick}
                style={{
                    height: 50,
                    width: 50,

                    background: "red",
                }}></div>
            <div
                onClick={handleClick}
                style={{
                    height: 50,
                    width: 50,
                    background: "yellow",
                }}></div>
            <div
                onClick={handleClick}
                style={{
                    height: 50,
                    width: 50,
                    background: "purple",
                }}></div>
        </div>
    );
};

export default ColorPicker;
