"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StaffDetails from "./modals/StaffDetails";
import { useState } from "react";

const StaffCardDeptPage = ({ staff }: { staff: StaffDetails }) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <>
      <div
        className=" py-3 px-4 rounded-xl border-b-2 !text-slate-950 md:hover:scale-110 duration-400 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-start items-start gap-4 ">
          <Avatar className="h-20 w-20 shadow-lg border-2 border-slate-950">
            <AvatarImage src={staff.image} />
            <AvatarFallback>{staff.name}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className=" text-[13px] bold text-left">{staff.name}</h1>
            <p className=" text-[12px] italic text-left">{staff.rank}</p>
          </div>
        </div>
      </div>
      <StaffDetails staffDetails={staff} open={open} close={close} />
    </>
  );
};

export default StaffCardDeptPage;
