import { Button } from "./ui/button";

const Explore = () => {
  return (
    <div className=" bg-slate-500 text-slate-100 py-10 px-4 ">
      <div className="flex flex-col md:flex-row items-center gap-4  max-w-4xl mx-auto">
        <h1 className="text-[35px] font-extrabold  ">
          Why Uniabuja Faculty of Environmental Sciences?
        </h1>
        <p className="text-[18px] text-justify">
          Because you want to make a difference in the world, you love to
          create, and you think globally.
        </p>
      </div>
      <Button variant="default" className="w-full text-[20px] text-slate-100 bg-slate-950 my-4 py-4 h-fit max-w-md mx-auto block">
        Explore the Faculty
      </Button>
    </div>
  );
};

export default Explore;
