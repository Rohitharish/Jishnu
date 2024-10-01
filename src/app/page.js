"use client";

import ScrollProvider from "./components/Scrollprovider";

import Preloader from "./components/Preloader";
import dynamic from "next/dynamic";
import Intro from "./components/Intro";
import Project from "./pages/Project/page";
import Experience from "./components/Experience/Moshi";
import Menu from "./components/Menu/Menu";

const DynamicScene = dynamic(() => import("./components/3delement/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Preloader />

      <DynamicScene />
    </>
  );
}
