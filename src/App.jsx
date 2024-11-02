import React from "react";
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Layer from "./Components/Layer";
import ParallaxImage from "./Components/ParallaxImage";
import Credits from "./Components/Credits";

const App = () => {
  const [loading, setLoading] = useState(true);
  // window.onload = () => {
  //   setLoading(false);
  // };
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return loading ? (
    <div
      className="h-screen flex items-center justify-center flex-col"
      style={{
        backgroundImage: "url('/images/loading-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <DotLottieReact
        src="/lottie/Animation.lottie"
        speed="1"
        style={{
          width: "7rem",
          height: "7rem",
        }}
        loop
        autoplay
      />
    </div>
  ) : (
    <>
      <Hero />
      <Trending />
      <Layer />
      <ParallaxImage />
      <Credits />
    </>
  );
};

export default App;
