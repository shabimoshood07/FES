import AboutFaculty from "@/components/AboutFaculty";
import DeanWelcomeText from "@/components/DeanWelcomeText";
import Departments from "@/components/Departments";
import Events from "@/components/Events";
import Explore from "@/components/Explore";
import FacultyNews from "@/components/FacultyNews";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <DeanWelcomeText />
      <Explore />
      <Departments />
      <Programs />
      <FacultyNews />
      <Events />
      <AboutFaculty />
    </div>
  );
};

export default Home;
