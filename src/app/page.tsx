import DeanWelcomeText from "@/components/DeanWelcomeText";
import Departments from "@/components/Departments";
import Events from "@/components/Events";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <DeanWelcomeText />
      <Explore />
      <Departments />
      <Events />
    </div>
  );
};

export default Home;
