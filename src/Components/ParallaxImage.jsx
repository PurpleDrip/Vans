import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const ParallaxImage = () => {
  return (
    <ParallaxProvider>
      <h1 className="text-center text-4xl text-[--secondary] mt-32 tracking-[3rem] parallax-header relative">
        VANS GALLERY
      </h1>
      <div className="flex h-[200vh] mt-20 parallax-container">
        {/* First Div */}
        <div className="h-full image-column-container">
          <ParallaxBanner
            layers={[
              {
                children: (
                  <div className="flex flex-col items-center justify-center p-4 h-full gap-8">
                    <img
                      src="https://i.pinimg.com/474x/8d/f4/ec/8df4ec873a6bc30b8280b645eed3627d.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/71/a3/8b/71a38bbcb372d82dac86a4d3190697d6.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/11/db/1e/11db1e810f509f1bd6a79c98ac200d78.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/52/83/13/528313910df3031f90b3e7f71de6942d.jpg"
                      alt=""
                    />
                  </div>
                ),
                speed: -20,
              },
            ]}
            className="h-full"
          />
        </div>

        {/* Second Div */}
        <div className="h-full image-column-container">
          <ParallaxBanner
            layers={[
              {
                children: (
                  <div className="flex flex-col items-center justify-center h-full gap-8">
                    <img
                      src="https://i.pinimg.com/236x/4c/e3/56/4ce35613f1365e8a56b0dbc3c9131b2e.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/474x/12/6a/dc/126adc2cbeba38f1f26500c8a1bc0b64.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/2d/32/01/2d3201ef6176a2c5635acbfeee456b3c.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/56/76/a8/5676a8f7b2c752d6f16576e7e19f2c8f.jpg"
                      alt=""
                    />
                  </div>
                ),
                speed: 20,
              },
            ]}
            className="h-full"
          />
        </div>

        {/* Third Div */}
        <div className="h-full image-column-container hide">
          <ParallaxBanner
            layers={[
              {
                children: (
                  <div className="flex flex-col items-center justify-center h-full gap-8">
                    <img
                      src="https://i.pinimg.com/236x/84/b6/5b/84b65be2968713ab498f42728f029d6c.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/4d/49/4d/4d494d856165cf638d5b7f1bbf87b8fb.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/236x/c6/59/2b/c6592b407b8983caadb08590eaa07a6e.jpg"
                      alt=""
                    />
                    <img
                      src="https://i.pinimg.com/474x/98/17/ca/9817ca03d9f94b1e53ec4a4bde6900da.jpg"
                      alt=""
                    />
                  </div>
                ),
                speed: -60,
              },
            ]}
            className="h-full"
          />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
