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
          <div className="relative w-full h-[300px] md:h-[250px] rounded-lg overflow-hidden">
            <Image
              src={staff.image}
              width={500}
              height={500}
              alt={staff.name}
              className="h-full w-full absolute top-0 left-0 object-cover"
            />
          </div>
          <div>
            <p className=" text-[13px] italic text-left">{staff.rank}</p>
            <h1 className=" text-[13px] bold text-left font-bold mt-4">
              {staff.name}
            </h1>
          </div>
        </div>
      </div>
      <StaffDetails staffDetails={staff} open={open} close={close} />
    </>
  );
};

export default StaffCardDeptPage;
