"use client";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

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
  if (videoElement.srcObject) {
    videoElement.srcObject.getTracks().forEach((track) => track.stop());
    videoElement.srcObject = null;
  }
};

export default function VideoPage() {
  return (
    <main>
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
        <Button onClick={startVideo} color="green">
          Start
        </Button>
        <Button onClick={stopVideo} color="red">
          Stop
        </Button>
      </div>
    </main>
  );
}
