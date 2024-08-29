"use client";

import { useState, useEffect } from "react";
import Project from "./pages/Project/Page";
import ScrollProvider from "./components/Scrollprovider";
import Intro from "./components/Intro";
import ImageAnimator from "./components/Experience/Slide";
import Navbar from "./components/Navbar";
import Scene from "./components/3delement/Scene";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <ScrollProvider>
      <Preloader />
      <Navbar />
       <Scene /> 
      <main className="flex flex-col h-full w-full  items-center  bg-black ">
        <Intro />
        <Project />
        <ImageAnimator />
      </main>
    </ScrollProvider>
  );
}
