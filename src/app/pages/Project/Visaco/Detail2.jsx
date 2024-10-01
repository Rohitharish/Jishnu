"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "../../../components/Paragraphanimation/Paragraph";
import Multi from "../../../components/Multiparaanimation/Multi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Detail2() {
  return (
    <div className="relative flex flex-col h-[80vh] md:h-[100vh]  lg:h-[100vh] w-full px-[5%]  ">
      {/* first detail section */}
      <section className="flex flex-col h-full w-full items-start justify-start">
        <Paragraph className="flex  text-white text-base " text="2019-2010" />
        <Multi
          className="h-full text-white text-5xl md:text-6xl lg:text-6xl w-full md:w-[400px] lg:w-[400px]  "
          text="Visa booking application "
        />
      </section>
      <section className="flex h-full w-full items-center justify-center pl:0 md:pl-[300px] lg:pl-[300px]  ">
        <Multi
          className=" w-full   lg:w-[500px]  text-white text-base leading-[1.2]  font-majorMono"
          text="a visa booking application that streamlines and simplifies the online visa application process, allowing users to apply from home without needing to visit an embassy or consulate."
        />
      </section>
      <section className="flex  h-1/2 w-full items-center justify-between  ">
        <Link href="/">
          <Paragraph
            className="flex  justify-start   text-white text-sm  "
            text="[Go BAck]"
          />
        </Link>

        <Paragraph
          className="flex justify-end    text-white text-sm "
          text="react native , react js"
        />
      </section>
    </div>
  );
}

export default Detail2;
