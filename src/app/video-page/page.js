"use client";
import { useEffect } from "react";

const startVideo = () => {
  const videoElement = document.querySelector("#webcam-video");
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.error(`Could not access video: ${error}`);
      });
  }
  videoElement.play();
};

const stopVideo = () => {
  const videoElement = document.querySelector("#webcam-video");
  videoElement.pause();
  videoElement.srcObject = null;
};

export default function VideoPage() {
  return (
    <main>
      <h1 className="text-8xl w-fit mx-auto my-3">Hand Tracking</h1>
      <video
        id="webcam-video"
        className="w-[90%] bg-gray-400 mx-auto my-10 rounded-md [transform:rotateY(180deg)]"
      ></video>
      <div className="flex space-x-4 w-full mx-auto justify-center">
        <button
          onClick={startVideo}
          className="text-3xl font-sans hover:bg-blue-400 text-slate-300 hover:text-slate-800 px-[6px] py-[3px] rounded-md transition-all duration-200"
        >
          Start
        </button>
        <button
          onClick={stopVideo}
          className="text-3xl font-sans hover:bg-blue-400 text-slate-300 hover:text-slate-800 px-[6px] py-[3px] rounded-md transition-all duration-200"
        >
          Stop
        </button>
      </div>
    </main>
  );
}
