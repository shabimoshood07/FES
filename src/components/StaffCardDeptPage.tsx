"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StaffDetails from "./modals/StaffDetails";
import { useState } from "react";
import Image from "next/image";

const StaffCardDeptPage = ({ staff }: { staff: StaffDetails }) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <>
      <div
        className=" py-3 px-4 rounded-xl border-b-2 !text-slate-950 md:hover:scale-110 duration-400 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col justify-start items-start gap-4 ">
          {/* <Avatar className="h-20 w-20 shadow-lg border-2 border-slate-950">
            <AvatarImage src={staff.image} />
            <AvatarFallback>{staff.name}</AvatarFallback>
          </Avatar> */}

          <Image src={staff.image} width={500} height={500} alt={staff.name} className="h-[250px] max-w-[300px] w-full rounded-md"/>
          <div>
            <p className=" text-[13px] italic text-left">{staff.rank}</p>
            <h1 className=" text-[13px] bold text-left font-bold mt-6">{staff.name}</h1>
          </div>
        </div>
      </div>
      <StaffDetails staffDetails={staff} open={open} close={close} />
    </>
  );
};

export default StaffCardDeptPage;
