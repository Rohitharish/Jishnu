"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Paragraph from "../Paragraphanimation/Paragraph";
import Link from "next/link";
import Contact from "../Contact/Contact";

const menulinks = [
  { path: "/pages/Work", label: "[Work]" },
  { path: "/pages/About", label: "[About]" },
  { path: "/pages/Experience", label: "[eXperience]" },
];

function Menu() {
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
      ? { width: "90vw", height: "30vh" }
      : { width: "100vw", height: "5vh" };

    if (isMenuOpen) {
      tl.to(menuRef.current, {
        width: menuSize.width,
        height: menuSize.height,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          menuRef.current.style.overflow = "visible";
        },
      }).to(linksRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    } else {
      tl.to(linksRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.in",
      }).to(menuRef.current, {
        width: "0",
        height: "0",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          menuRef.current.style.overflow = "hidden";
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed h-[200px] w-full top-[3%] z-[100] font-majorMono">
      <Contact />
      <button
        className="absolute text-white left-[2%] rounded-lg flex items-end z-[100] overflow-hidden"
        onClick={toggleMenu}
      >
        <Paragraph
          className=" text-white text-sm"
          text={isMenuOpen ? "[-]" : "[+]"}
        ></Paragraph>
      </button>
      <div
        ref={menuRef}
        className="flex absolute overflow-hidden left-[5%] top-[5%] md:top-[1%] lg:top-[1%] z-[100] bg-none rounded-lg md:rounded-full lg:rounded-full"
      >
        <ul className="flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-6 md:space-y-0 lg:space-y-0 overflow-hidden">
          {menulinks.map((link, index) => (
            <li
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="mx-4"
            >
              <Link href={link.path} className="text-white text-md">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
