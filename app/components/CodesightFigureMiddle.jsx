"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function CodesightFigureMiddle() {
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
      className="hidden lg:block lg:absolute top-1 right-[8%] object-contain scale-50 opacity-25"
      src={"/assets/images/wave-codesight-middle.webp"}
      width={800 / 2.5}
      height={514 / 2.5}
      alt="figura"
    />
  );
}

export default CodesightFigureMiddle;
