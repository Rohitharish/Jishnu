"use client";
import { useEffect, useRef } from "react";

import Link from "next/link";
import { gsap } from "gsap";
import Maintext from "@/app/components/Maintextanimation/Maintext";

function Project() {
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useEffect(() => {
    gsap.set(project1.current, {
      y: "100vh",
    });
    gsap.set(project2.current, {
      x: "50vw",
    });
    gsap.set(project3.current, {
      x: "-50vw",
    });

    const tl = gsap.timeline();

    tl.to(
      project1.current,
      {
        y: "0vw",
        duration: 3,
        ease: "power4.inOut",
      },
      "<"
    );
    tl.to(
      project2.current,
      {
        x: "0vw",
        duration: 3,
        ease: "power4.inOut",
      },
      "<"
    );

    tl.to(
      project3.current,
      {
        x: "0vw",
        duration: 3,
        ease: "power4.inOut",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="h-full w-full  ">
      <section className="grid grid-cols-12 grid-rows-12 h-full w-full gap-1">
        <div className="row-span-4 col-span-12 md:col-span-6 lg:col-span-6 h-full w-full">
          <Maintext
            className="flex h-full w-full  items-center justify-center text-white text-8xl md:text-9xl lg:text-9xl font-majorMono "
            text="WoRK"
          />
        </div>
        <div className=" row-span-12  md:row-span-6 lg:row-span-6 col-span-12 md:col-span-6 lg:col-span-6 h-full w-full  overflow-hidden">
          <Link href="/pages/Project/Zelt">
            <img
              ref={project1}
              className="h-full w-full object-cover "
              src={"/sample1.jpg"}
              alt="zelt"
            />
          </Link>
        </div>
        <div className=" row-span-12 md:row-span-8 lg:row-span-8 col-span-12 md:col-span-6 lg:col-span-6 h-full w-full  overflow-hidden">
          <Link href="/pages/Project/Visaco">
            <img
              ref={project2}
              className="h-full w-full object-cover "
              src={"/sample3.jpg"}
              alt="Visaco"
            />
          </Link>
        </div>
        <div className="row-span-12  md:row-span-6 lg:row-span-6 col-span-12 md:col-span-6 lg:col-span-6 h-full w-full  overflow-hidden">
          <Link href="/pages/Project/Aunest">
            <img
              ref={project3}
              className="h-full w-full object-cover "
              src={"/sample2.jpg"}
              alt="Aunest"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Project;
