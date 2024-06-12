"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function CodesightFigureEnd() {
  const figureEnd = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(figureEnd.current, {
        scrollTrigger: {
          trigger: figureEnd.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        x: -200,
        scale: 1,
        opacity: 1,
        duration: 1,
      });
    },
    { scope: figureEnd }
  );

  return (
    <Image
      ref={figureEnd}
      className="hidden lg:block lg:absolute top-0 -right-[200px] object-contain"
      src={"/assets/images/wave-codesight-end.webp"}
      width={528 / 2}
      height={1009 / 2}
      alt="figura"
    />
  );
}

export default CodesightFigureEnd;
