"use client";
import Link from "next/link";
import Model from "./components/model3d/Model";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="bg-[rgba(30,30,30)] text-[rgba(255,255,255,0.8)] p-[8px] min-h-screen">
      <div className="flex flex-col-reverse md:flex-row md:py-28">
        <h1 className="text-5xl tracking-tighter md:text-7xl p-3 max-w-[50%] text-center mx-auto">
          Hand Detection Model
        </h1>
        <div className="h-fit w-fit mx-auto">
          <Model />
        </div>
      </div>
      <div className="max-w-[60%] tracking-wide text-center my-10 mx-auto text-lg md:text-xl">
        <p>
          One of the most feature rich and fast AI model on hand detection is
          here!
        </p>
        <p>Get ready to witness the strength of AI in real-time!</p>
      </div>
      <div className="w-fit h-fit my-10 mx-auto">
        <Button color="green">
          <Link href="video-page">Start Model</Link>
        </Button>
      </div>
    </main>
  );
}
