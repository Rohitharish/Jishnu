"use client";

import dynamic from "next/dynamic";

const DynamicScene = dynamic(() => import("./components/3delement/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <DynamicScene />
    </>
  );
}
