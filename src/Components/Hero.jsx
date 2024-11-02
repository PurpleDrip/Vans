import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleBarRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.muted = false;
    console.log(window.scrollY);
    const handleScroll = () => {
      console.log(window.scrollY);
      videoRef.current.muted = window.scrollY !== 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.from(titleBarRef.current, {
      delay: 2,
      duration: 1,
      letterSpacing: 0,
      y: "50vh",
    });

    const titleBarAnimation = gsap.to(titleBarRef.current, {
      backgroundColor: "var(--transparent)",
      margin: "1rem",
      textAlign: "center",
      borderRadius: "2rem",
      letterSpacing: "0rem",
      fontSize: window.matchMedia("(min-width: 768px)").matches
        ? "1rem"
        : "0.8rem",
      scrollTrigger: {
        trigger: "body",
        start: "top -10%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-screen">
        <video
          ref={videoRef}
          src="/videos/hero.webm"
          autoPlay
          muted={true}
          loop
          className="w-full h-full object-cover"
        />
      </div>
      <div
        ref={titleBarRef}
        className="fixed inset-0 h-[4rem] flex items-center justify-center z-50  title-bar"
      >
        <h1 className="tracking-[3rem] text-xl md:text-3xl text-[--secondary] m-0 p-0">
          VANS
        </h1>
      </div>
    </div>
  );
};

export default Hero;
