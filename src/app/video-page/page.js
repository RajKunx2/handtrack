"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import ProgressBar from "@ramonak/react-progress-bar";

const startVideo = (progressFunction) => {
  progressFunction(20);
  const videoElement = document.querySelector("#webcam-video");
  progressFunction(40);
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
        progressFunction(100);
      })
      .catch((error) => {
        console.error(`Could not access video: ${error}`);
      });
  }
  videoElement.play();
};

const stopVideo = (progressFunction) => {
  progressFunction(0);
  const videoElement = document.querySelector("#webcam-video");
  if (videoElement.srcObject) {
    progressFunction(40);
    videoElement.srcObject.getTracks().forEach((track) => track.stop());
    videoElement.srcObject = null;
    progressFunction(100);
  }
};

export default function VideoPage() {
  const [progress, setProgress] = useState(0);
  return (
    <main>
      <ProgressBar
        completed={progress}
        id="progress-bar"
        bgColor="blue"
        height={"5px"}
        isLabelVisible={false}
        baseBgColor={"#ffffff"}
      />
      <h1 className="text-3xl font-bold tracking-wide w-fit mx-auto my-3">
        Hand Tracking
      </h1>
      <Card className="mb-5">
        <CardHeader></CardHeader>
        <CardBody>
          <video
            id="webcam-video"
            className="w-[50rem] h-[30rem] bg-gray-400 mx-auto rounded-md [transform:rotateY(180deg)]"
          ></video>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <div className="flex space-x-4 w-full mx-auto justify-center">
        <Button
          onClick={() => {
            startVideo(setProgress);
          }}
          color="green"
        >
          Start
        </Button>
        <Button
          onClick={() => {
            stopVideo(setProgress);
          }}
          color="red"
        >
          Stop
        </Button>
      </div>
    </main>
  );
}
