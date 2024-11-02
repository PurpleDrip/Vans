import React from "react";

const Credits = () => {
  return (
    <div className="credits-container min-h-[10vh] my-[10rem] flex justify-around">
      <div className="text-[--secondary] flex flex-col gap-8 w-1/2 credits-left">
        <h1 className="text-8xl ml-auto">Designer</h1>
        <p className="text-right hide">
          I am a passionate web developer based in Bangalore, India,
          specializing in creating engaging web experiences. This website
          showcases my skills using modern technologies like React, Tailwind
          CSS, and Framer Motion. I love building responsive and interactive
          websites with clean code and smooth animations. The site features
          custom components, parallax effects, and seamless mobile optimization.
        </p>
        <div className="links flex gap-8 mt-20 mx-auto">
          <a href="https://github.com/purpledrip" target="_blank">
            <img src="images/github.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/purpledrip/">
            <img src="images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="credits-card h-[50vh] w-[30vw] bg-indigo-600 flex flex-col items-center justify-center gap-8 rounded-lg">
        <img src="images/Skeleton.jpeg" alt="" className="h-3/5 rounded-full" />
        <div className="card-text flex flex-col items-center ">
          <h1 className="text-4xl text-[--secondary] tracking-widest">
            Purple Drip
          </h1>
          <h1 className="text-xl text-[--secondary]">Web Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Credits;
