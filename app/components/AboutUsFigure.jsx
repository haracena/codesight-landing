"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function AboutUsFigure() {
  const figureBottom = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(figureBottom.current, {
        scrollTrigger: {
          trigger: figureBottom.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        y: -150,
        scale: 1,
        opacity: 1,
        duration: 1,
      });
    },
    { scope: figureBottom }
  );

  return (
    <div
      ref={figureBottom}
      className="absolute pt-32 -z-10 mx-auto -bottom-[160%] lg:-bottom-[630px] left-1/2 -translate-x-[60%] lg:-translate-x-[60%] opacity-25"
    >
      <Image
        className=""
        src={"/assets/images/wave-about.webp"}
        width={948 / 1.5}
        height={1021 / 1.5}
        alt="figura"
      />
    </div>
  );
}

export default AboutUsFigure;
