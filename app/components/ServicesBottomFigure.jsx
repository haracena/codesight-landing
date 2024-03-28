"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function ServicesBottomFigure() {
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
        x: 264,
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
      className="absolute bottom-32 -left-[200px] scale-50 opacity-25 object-contain"
      src={"/assets/images/wave-bottom-services.webp"}
      width={209 / 2}
      height={165 / 2}
      alt="figura"
    />
  );
}

export default ServicesBottomFigure;
