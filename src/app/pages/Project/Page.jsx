"use client";
import ReusableScrollAnimation from "@/app/components/Workcomponent/Work";
import React from "react";
import Detail from "@/app/components/Zelt/Detail";
import Details2 from "@/app/components/aunest/Details2";
import Details3 from "@/app/components/visaco/Details3";

function Project() {
  return (
    <div div className="h-full w-full space-y-8">
      <ReusableScrollAnimation
        imageSrc="/Zelt.png"
        text="VISACO"
        scaleInitial={1}
        scaleFinal={0.9}
        imageinitialscale={1}
        imagefinalscale={1.2}
        borderRadius={10}
        scrub={1}
        start="0%"
        end="100%"
      />
      <Detail />

      <ReusableScrollAnimation
        imageSrc="/Aunest.png"
        text="ZELT"
        scaleInitial={1}
        scaleFinal={0.9}
        imageinitialscale={1}
        imagefinalscale={1.2}
        borderRadius={20}
        scrub={0.5}
        start="10%"
        end="90%"
      />
      <Details2 />

      <ReusableScrollAnimation
        imageSrc="/Aunest.png"
        text="AUNEST"
        scaleInitial={1}
        scaleFinal={0.9}
        imageinitialscale={1}
        imagefinalscale={1.2}
        borderRadius={20}
        scrub={0.5}
        start="10%"
        end="90%"
        className="another-custom-styles"
      />
      <Details3 />
    </div>
  );
}

export default Project;
