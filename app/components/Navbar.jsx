"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="py-6 px-16 fixed z-30 top-0 left-0 w-full flex justify-between items-center bg-black animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in">
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
      <ul className="flex items-center gap-10 text-white">
        {/* <ScrollLink
          className="transition-all duration-300 hover:text-cyan-400 cursor-pointer"
          to="home"
          smooth
          offset={-70}
          duration={500}
        >
          <li>Home</li>
        </ScrollLink> */}
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
    </nav>
  );
}

export default Navbar;
