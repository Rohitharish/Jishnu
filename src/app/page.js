"use client";

import Project from "./pages/Page";
import ScrollProvider from "./components/Scrollprovider";

import Experience from "./components/Experience";
export default function Home() {
  return (
    <ScrollProvider>
      <main className="flex h-full flex-col items-center  bg-black">
        {/* <Intro /> */}
        <Project />
        <Experience />
        <div className="h-screen w-full"></div>
      </main>
    </ScrollProvider>
  );
}
