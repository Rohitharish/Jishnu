"use client";

import { useState, useEffect } from "react";
import Project from "./pages/Project/Page";
import ScrollProvider from "./components/Scrollprovider";
import Intro from "./components/Intro";
import ImageAnimator from "./components/Experience/Slide";
import Navbar from "./components/Navbar";

import Preloader from "./components/Preloader";
import dynamic from "next/dynamic";

const DynamicScene = dynamic(() => import("./components/3delement/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <ScrollProvider>
      <Preloader />
      <Navbar />
      <DynamicScene />

      <main className="flex flex-col h-full w-full  items-center  bg-black ">
        <Intro />
        <Project />
        <ImageAnimator />
      </main>
    </ScrollProvider>
  );
}
