"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="py-4 px-4 md:py-6 md:px-16 fixed z-30 top-0 left-0 w-full flex justify-between items-center bg-black bg-opacity-90 backdrop-blur-sm animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in">
        <ScrollLink
          className="transition-all duration-300 cursor-pointer"
          to="home"
          smooth
          offset={-70}
          duration={500}
        >
          <Image
            className="object-contain"
            src={"/assets/images/logo.webp"}
            width={1030 / 6}
            height={78 / 6}
            alt="Logo Codesight"
          />
        </ScrollLink>
        <ul className="hidden lg:flex items-center gap-10 text-white">
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="quienes-somos"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Quienes somos</li>
          </ScrollLink>
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="servicios"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Servicios</li>
          </ScrollLink>
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="objetivo"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Objetivo</li>
          </ScrollLink>
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="valores"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Valores</li>
          </ScrollLink>
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="stack"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Stack</li>
          </ScrollLink>
          <ScrollLink
            className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            to="contacto"
            smooth
            offset={-70}
            duration={500}
          >
            <li>Contacto</li>
          </ScrollLink>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <RiMenu3Line className="text-white text-2xl" />
        </button>
      </nav>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed z-50 top-0 right-0 h-screen w-screen bg-black opacity-60"
        ></div>
      )}

      <ul
        className={`flex flex-col gap-8 pb-4 pt-24 px-16 fixed top-0 h-screen min-w-[40vw] bg-black z-[60] transition-all duration-300 text-white items-end  ${
          isOpen ? "right-0" : "-right-[100%]"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <RiCloseLine className="text-3xl" />
        </button>

        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="home"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Home</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="quienes-somos"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Quienes somos</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="servicios"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Servicios</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="objetivo"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Objetivo</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="valores"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Valores</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="stack"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Stack</li>
        </ScrollLink>
        <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="contacto"
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsOpen(false)}
        >
          <li>Contacto</li>
        </ScrollLink>
      </ul>
    </>
  );
}

export default Navbar;
