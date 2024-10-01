"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "../../../components/Paragraphanimation/Paragraph";
import Multi from "../../../components/Multiparaanimation/Multi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Info() {
  return (
    <div className="relative flex flex-col h-[80vh] md:h-[100vh]  lg:h-[100vh] w-full   ">
      {/* first detail section */}
      <section className="flex flex-col h-full w-full items-start justify-start">
        <Paragraph
          className="flex  text-white text-base font-majorMono "
          text="2019-2010"
        />
        <Multi
          className="text-white text-5xl md:text-6xl lg:text-5xl w-full md:w-[400px] lg:w-[400px]   "
          text="Aspiring web and moble app dev"
        />
      </section>
      <section className="flex h-full w-full items-center justify-center pl:0 md:pl-[300px] lg:pl-[300px]  ">
        <Multi
          className=" w-full   lg:w-[500px]  text-white text-base leading-[1.2] font-majorMono"
          text="Jewellery Management System with a React Native mobile app for users and ReactJS web apps for admin and vendor panels, enabling shop management, product sales, and investment plan enrollments"
        />
      </section>
      <section className="flex  h-1/2 w-full items-center justify-between  ">
        <Link href="/">
          <Paragraph
            className="flex  justify-start   text-white text-sm font-majorMono "
            text="[Go BAck]"
          />
        </Link>

        <Paragraph
          className="flex justify-end    text-white text-sm  font-majorMono"
          text="born [2/4/2000]"
        />
      </section>
    </div>
  );
}

export default Info;
