"use client";

import Project from "./pages/Project/Page";
import ScrollProvider from "./components/Scrollprovider";
import Intro from "./components/Intro";
<Intro />;

import ImageAnimator from "./components/Experience/Slide";

export default function Home() {
  return (
    <ScrollProvider>
      <main className="flex flex-col h-full w-full  items-center  bg-black ">
        <Intro />
        <Project />
        <ImageAnimator />
      </main>
    </ScrollProvider>
  );
}
