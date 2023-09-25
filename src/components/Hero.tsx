import HeroText from "./HeroText";
import HomeCarousel from "./HomeCarousel";

const Hero = () => {
  return (
    <div className=" bg-slate-500 text-slate-100 min-h-[calc(100vh-80px)]  md:min-h-[calc(100vh-126px)]">
      <HeroText text="Faculty of Enviromental Sciences" />
      <div className="relative h-[calc(70vh-4rem)] md:h-[calc(70vh-4rem)]  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute h-full w-full top-0 left-0 bg-slate-700 opacity-50"></div>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Hero;
