"use client";
import { useState, useEffect } from "react";
import { Button, Progress } from "@material-tailwind/react";
import * as handTrack from "handtrackjs";

const startVideo = (setProgress, setVideoState, videoState, model) => {
  setProgress(0);
  const video = document.querySelector("#webcam-video");
  const canvas = document.querySelector("#render-canvas");
  const context = canvas.getContext("2d");
  setProgress(20);
  // start video
  handTrack.startVideo(video).then((status) => {
    setProgress(50);
    setVideoState(true);
    if (status) {
      runDetection(
        model,
        canvas,
        context,
        videoState,
        video,
        setProgress,
        setVideoState
      );
    }
    setProgress(100);
  });
};

const runDetection = (
  model,
  canvas,
  context,
  play,
  video,
  setProgress,
  setVideoState
) => {
  try {
    model.detect(video).then((predictions) => {
      model.renderPredictions(predictions, canvas, context, video);
      requestAnimationFrame(() =>
        runDetection(
          model,
          canvas,
          context,
          play,
          video,
          setProgress,
          setVideoState
        )
      );
    });
  } catch (err) {
    // video was not loaded, try again
    stopVideo(setProgress, setVideoState);
    startVideo(setProgress, setVideoState, videoState, model);
  }
};

const stopVideo = (setProgress, setVideoState) => {
  const video = document.querySelector("#webcam-video");
  handTrack.stopVideo(video);
  setVideoState(false);
  setProgress(0);
};

export default function VideoPage() {
  const [progress, setProgress] = useState(20);
  const [play, setPlay] = useState(false);
  const [model, setModel] = useState(null);
  useEffect(() => {
    // load model
    // if (localStorage.getItem("model")) {
    //   setProgress(100);
    //   setModel(JSON.parse(localStorage.getItem("model")));
    // } else {
    setProgress(20);
    const modelParams = {
      flipHorizontal: true,
      maxNumBoxes: 20,
      iouThreshold: 0.5,
      scoreThreshold: 0.6,
    };
    setProgress(40);
    handTrack.load(modelParams).then((loaded_model) => {
      setProgress(100);
      setModel(loaded_model);
      // localStorage.setItem("model", JSON.stringify(loaded_model));
    });
    // }
  }, []);
  return (
    <>
      <main>
        <Progress
          value={progress}
          variant="gradient"
          size="sm"
          color="green"
          className={`!transition-all !duration-700 ${
            progress === 100 ? "opacity-0" : "opacity-100"
          }`}
        />
        <h1 className="text-4xl font-bold tracking-wide w-fit mx-auto my-3">
          Hand Tracking
        </h1>
        <div className="my-5">
          <video id="webcam-video" className="hidden" autoPlay={true}></video>
          <canvas
            id="render-canvas"
            className="block w-fit mx-auto rounded-md"
          ></canvas>
        </div>
      </main>
      <Button
        onClick={() => {
          play
            ? stopVideo(setProgress, setPlay)
            : startVideo(setProgress, setPlay, play, model);
        }}
        color={play ? "red" : "green"}
        className="!absolute !bottom-5 !left-[50%] !translate-x-[-50%]"
        disabled={!model}
      >
        {model ? (play ? "Stop Video" : "Start Video") : "Loading Model..."}
      </Button>
    </>
  );
}
