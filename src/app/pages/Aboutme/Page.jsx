import Maintext from "@/app/components/Maintextanimation/Maintext";
import React from "react";

function About() {
  return (
    <div className="h-full">
      <ReusableScrollAnimation
        imageSrc="/sample3.jpg"
        scaleInitial={1}
        scaleFinal={0.9}
        imageinitialscale={1}
        imagefinalscale={1.2}
        borderRadius={10}
        scrub={1}
        start="0%"
        end="100%"
      />

      <Paragraph
        className="flex h-full w-full  items-center justify-center text-white text-xl "
        text="2019-2010"
      />
    </div>
  );
}

export default About;
