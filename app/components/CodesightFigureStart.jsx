"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function CodesightFigureStart() {
  const figureMiddle = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(figureMiddle.current, {
        scrollTrigger: {
          trigger: figureMiddle.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        x: -200,
        scale: 1,
        opacity: 1,
        duration: 1,
      });
    },
    { scope: figureMiddle }
  );

  return (
    <Image
      ref={figureMiddle}
      className="hidden lg:block lg:absolute top-[40px] right-[33%] object-contain scale-50 opacity-25"
      src={"/assets/images/wave-codesight-start.webp"}
      width={233 / 2}
      height={202 / 2}
      alt="figura"
    />
  );
}

export default CodesightFigureStart;
