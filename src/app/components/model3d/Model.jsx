// import { ModelViewerElement, FileLoader } from "@google/model-viewer";
import Head from "next/head";
import Script from "next/script";
export default function Model() {
  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />

      <model-viewer
        src="/hand_topology_technical_demonstration.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity="1"
        environment-image="legacy"
        exposure="0.93"
        auto-rotate
      >
        {" "}
      </model-viewer>
    </div>
  );
}
