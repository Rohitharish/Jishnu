"use client";

import Detail from "./components/Detail";
import ScrollProvider from "./components/Scrollprovider";
import Work from "./components/Work";
export default function Home() {
  return (
    <ScrollProvider>
      <main className="flex h-full flex-col items-center  bg-black">
        <div className="h-screen w-full"></div>
        <Work />
        <Detail />
        <div className="h-screen w-full"></div>
      </main>
    </ScrollProvider>
  );
}
