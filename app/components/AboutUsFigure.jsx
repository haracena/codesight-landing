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
    <Image
      ref={figureBottom}
      className="absolute -bottom-[630px] left-1/2 -translate-x-[60%] opacity-25"
      src={"/assets/images/wave-about.webp"}
      width={948 / 1.5}
      height={1021 / 1.5}
      alt="figura"
    />
  );
}

export default AboutUsFigure;
