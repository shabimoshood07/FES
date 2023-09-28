import React from "react";
import HomeSectionsHeading from "./HomeSectionsHeading";

const Events = () => {
  return (
    <div className="bg-white min-h-[500px] relative">
      <div id="events" className="absolute -top-[80px] md:-top-[126px]"></div>
      <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
        <HomeSectionsHeading
          text="Events"
          style="text-slate-950 after:bg-slate-950"
        />
      </div>
    </div>
  );
};

export default Events;
