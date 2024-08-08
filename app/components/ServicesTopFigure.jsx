"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function ServicesTopFigure() {
  const figure = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(figure.current, {
        scrollTrigger: {
          trigger: figure.current,
          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
        x: -300,
        scale: 1,
        opacity: 1,
        duration: 1,
      });
    },
    { scope: figure }
  );

  return (
    <Image
      ref={figure}
      className="absolute top-0 hidden sm:block -right-[300px] scale-50 opacity-25 object-contain"
      src={"/assets/images/wave-top-services.webp"}
      width={536 / 2}
      height={904 / 2}
      alt="figura"
    />
  );
}

export default ServicesTopFigure;
