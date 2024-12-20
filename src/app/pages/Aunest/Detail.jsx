"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "../../components/Paragraphanimation/Paragraph";
import Multi from "../../components/Multiparaanimation/Multi";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Detail1() {
  return (
    <div className="relative flex flex-col h-[80vh] md:h-[100vh]  lg:h-[100vh] w-full px-[5%]  ">
      {/* first detail section */}
      <section className="flex flex-col h-full w-full items-start justify-start">
        <Paragraph className="flex  text-white text-base font-major" text="2019-2010" />
        <Multi
          className="h-full text-white text-5xl md:text-6xl lg:text-6xl w-full md:w-[400px] lg:w-[500px]  "
          text="Admin-Vendor Management"
        />
      </section>
      <section className="flex h-full w-full items-center justify-center pl:0 md:pl-[300px] lg:pl-[300px]  font-major">
        <Multi
          className=" w-full   lg:w-[500px]  text-white text-base leading-[1.2]  font-major lowercase"
          text="a Jewellery Management System with a React Native mobile app for users and ReactJS web apps for admin and vendor panels, enabling shop management, product sales, and investment plan enrollments."
        />
      </section>
      <section className="flex  h-1/2 w-full items-center justify-between  font-major">
        <Link href="/">
          <Paragraph
            className="flex  justify-start   text-white text-sm  font-major"
            text="[Go BAck]"
          />
        </Link>

        <Paragraph
          className="flex justify-end    text-white text-sm font-major"
          text="react native , react js"
        />
      </section>
    </div>
  );
}

export default Detail1;
