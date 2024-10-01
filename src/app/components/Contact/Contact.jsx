"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Paragraph from "../Paragraphanimation/Paragraph";
import Link from "next/link";

const menulinks = [
  { path: "/", label: "instaGRAM" },
  { path: "/", label: "linKedin" },
  { path: "/", label: "tWitteR" },
];

function Contact() {
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    const isMobile = window.innerWidth < 768;

    const menuSize = isMobile
      ? { width: "80vw", height: "50vh" }
      : { width: "40vw", height: "10vh" };

    if (isMenuOpen) {
      tl.to(menuRef.current, {
        width: menuSize.width,
        height: menuSize.height,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          menuRef.current.style.overflow = "visible";
        },
      });
      tl.to(linksRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      });
    } else {
      tl.to(menuRef.current, {
        width: "0",
        height: "0",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          menuRef.current.style.overflow = "hidden"; // Hide content after closing
        },
      });
      tl.to(linksRef.current, { opacity: 0, y: 20, duration: 0.3, stagger: 1 });
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed h-[200px] w-full top-[3%] z-[100] font-majorMono">
      <button
        className="absolute text-white   right-[2%] rounded-lg flex items-end  z-[100] overflow-hidden"
        onClick={toggleMenu}
      >
        <Paragraph
          className=" text-white text-sm"
          text={isMenuOpen ? "[close]" : "[connect]"}
        />
      </button>
      <div
        ref={menuRef}
        className="h-0 w-0 overflow-hidden top-[8%] mr-6 z-50 bg-[#FF5C00] rounded-lg md:rounded-full lg:rounded-full"
        style={{
          transition: "width 0.5s ease, height 0.5s ease",
          right: 0,
          position: "fixed",
        }}
      >
        <ul className="flex h-full w-full flex-col md:flex-row lg:flex-row items-center justify-center space-y-6 md:space-y-0 lg:space-y-0">
          {menulinks.map((link, index) => (
            <li
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="mx-4"
            >
              <Link href={link.path} className="text-black text-2xl">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
