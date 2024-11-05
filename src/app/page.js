"use client";

import Preloader from "./components/Preloader";
import dynamic from "next/dynamic";

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
