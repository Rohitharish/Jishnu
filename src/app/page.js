"use client";

import Project from "./pages/Project/Page";
import ScrollProvider from "./components/Scrollprovider";

import Experiencemain from "./pages/Experience/page";
export default function Home() {
  return (
    <ScrollProvider>
      <main className="flex h-full flex-col items-center  bg-black">
        {/* <Intro /> */}
        <Project />
        <Experiencemain />

        <div className="h-screen w-full"></div>
      </main>
    </ScrollProvider>
  );
}
