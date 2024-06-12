"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function Brightness() {
  const mainBrightness = useRef();
  const whiteBrightness = useRef();
  const cyanBrightness = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(mainBrightness.current, {
        scrollTrigger: {
          trigger: mainBrightness.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        xPercent: -95,
        duration: 0.75,
      });
      gsap.to(whiteBrightness.current, {
        scrollTrigger: {
          trigger: mainBrightness.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        xPercent: -95,
        rotate: -10,
        duration: 0.78,
      });
      gsap.to(cyanBrightness.current, {
        scrollTrigger: {
          trigger: mainBrightness.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
        xPercent: -95,
        rotate: -10,
        duration: 0.78,
      });
    },
    { scope: mainBrightness }
  );

  return (
    <>
      <div
        ref={mainBrightness}
        className="h-[100%] lg:h-[55%] w-[110vw] absolute -right-[110vw] top-1/2 -translate-y-[53%] -rotate-[4deg] bg-gradient-to-r from-white/25 to-white/85 blur-[25px] mix-blend-plus-lighter rounded-3xl"
      ></div>
      <div
        ref={whiteBrightness}
        className="z-20 h-[30px] w-[110vw] absolute -right-[110vw] bottom-[25%] -translate-y-[50%] bg-gradient-to-r from-white/100 to-white/0 blur-[30px] rounded-3xl"
      ></div>
      <div
        ref={cyanBrightness}
        className="z-20 h-[15px] w-[110vw] absolute -right-[110vw] bottom-[15%] -translate-y-[50%] bg-gradient-to-r from-cyan-400/100 to-cyan-400/0 blur-[20px] mix-blend-plus-lighter rounded-3xl"
      ></div>
    </>
  );
}

export default Brightness;
