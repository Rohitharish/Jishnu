import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function Experience2() {
  const ECref = useRef(null);
  const S1ref = useRef(null);
  const S2ref = useRef(null);
  const S3ref = useRef(null);
  const IMref = useRef(null);

  useEffect(() => {
    const Experiencecontainer = ECref.current;
    const Sentence1 = S1ref.current;
    const Sentence2 = S2ref.current;
    const Sentence3 = S3ref.current;
    const Image = IMref.current;

    const master = gsap.timeline();

    const setinitialposition = () => {
      gsap.set(Sentence1, { xPercent: 0 });
      gsap.set(Sentence2, { xPercent: 0 });

      gsap.set(Image, { yPercent: 100 });
    };

    const Finalanimation = () => {
      const tl = gsap.timeline();

      tl.to(Sentence1, {
        xPercent: 100,
        scrollTrigger: {
          trigger: Experiencecontainer,
          start: "-20%",
          end: "50%",

          scrub: 1,
        },
      });

      tl.to(Sentence2, {
        xPercent: 100,
        scrollTrigger: {
          trigger: Experiencecontainer,
          start: "-20%",
          end: "50%",

          scrub: 1,
        },
      });
      tl.to(Image, {
        yPercent: 0,
        scrollTrigger: {
          trigger: Experiencecontainer,
          start: "0%",
          end: "5%",
          markers: true,
          scrub: 4,
        },
      });

      return tl;
    };

    master.add(setinitialposition).add(Finalanimation);

    return () => {
      master.kill();
    };
  }, []);
  return (
    <section ref={ECref} className="flex  flex-row  h-screen w-full ">
      <div className="flex justify-center items-center h-full w-full ">
        <div className=" relative  w-[300px] overflow-hidden ">
          <div
            ref={S1ref}
            className="absolute h-full w-full bg-black   border-l-4"
          ></div>
          <span className="text-base">global garden produce</span>
        </div>
      </div>
      <div className="flex h-full w-full overflow-hidden">
        <img
          ref={IMref}
          className="h-full w-full object-cover"
          src="./Zelt.png"
        />
      </div>
      <div className="flex justify-center items-center h-full w-full ">
        <div className=" relative  w-[300px] overflow-hidden">
          <div
            ref={S2ref}
            className="absolute h-full w-full bg-black  border-l-4"
          ></div>
          <span className="text-base">feb 2024 - may 2024</span>
        </div>
      </div>
    </section>
  );
}

export default Experience2;
