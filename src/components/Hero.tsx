import React from "react";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-slate-500 text-slate-100">
      {/* <h1 className="text-4xl tracking-widest font-bold">
        Faculty of Environmental Sciences
      </h1> */}
      <HeroText text="Faculty of Environmental Sciences" />
    </div>
  );
};

export default Hero;
