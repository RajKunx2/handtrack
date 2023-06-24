"use client";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import ProgressBar from "@ramonak/react-progress-bar";

const startVideo = (progressFunction, videoState) => {
  progressFunction(20);
  const videoElement = document.querySelector("#webcam-video");
  if (navigator.mediaDevices.getUserMedia) {
    progressFunction(40);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
        progressFunction(80);
        videoElement.play();
        progressFunction(100);
        videoState(true);
      })
      .catch((error) => {
        console.error(`Could not access video: ${error}`);
        videoState(false);
      });
  }
};

const stopVideo = (progressFunction, videoState) => {
  const videoElement = document.querySelector("#webcam-video");
  if (videoElement.srcObject) {
    videoElement.srcObject.getTracks().forEach((track) => track.stop());
    videoElement.srcObject = null;
    videoState(false);
    progressFunction(0);
  }
};

export default function VideoPage() {
  const [progress, setProgress] = useState(0);
  const [play, setPlay] = useState(true);
  useEffect(() => {
    startVideo(setProgress, setPlay);
  }, []);
  return (
    <>
      <main>
        <ProgressBar
          completed={progress}
          id="progress-bar"
          bgColor={"#1199ff"}
          height={"5px"}
          isLabelVisible={false}
          baseBgColor={"#ffffff"}
          transitionDuration="400ms"
        />
        <h1 className="text-4xl font-bold tracking-wide w-fit mx-auto my-3">
          Hand Tracking
        </h1>
        <div className="my-5">
          <video
            id="webcam-video"
            className="mx-auto rounded-md [transform:rotateY(180deg)]"
          ></video>
        </div>
      </main>
      <Button
        onClick={() => {
          play
            ? stopVideo(setProgress, setPlay)
            : startVideo(setProgress, setPlay);
        }}
        color={play ? "red" : "green"}
        className="!absolute !bottom-5 !left-[50%] !translate-x-[-50%]"
      >
        {play ? "Stop Video" : "Start Video"}
      </Button>
    </>
  );
}
