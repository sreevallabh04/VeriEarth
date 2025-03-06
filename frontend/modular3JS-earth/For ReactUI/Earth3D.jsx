"use client"; // Required for Next.js

import { useEffect } from "react";
import Earth3D from "./earth";

const EarthComponent = () => {
    useEffect(() => {
        new Earth3D("earth-container");
    }, []);

    return <div id="earth-container" style={{ width: "500px", height: "500px" }}></div>;
};

export default EarthComponent;
