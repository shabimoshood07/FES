import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { IoMdMail } from "react-icons/io";
import { BsJournals, BsTelephoneOutbound } from "react-icons/bs";
import { Separator } from "../ui/separator";
const StaffDetails = ({
  staffDetails,
  open,
  close,
}: {
  staffDetails: StaffDetails;
  open: boolean;
  close: () => void;
}) => {
  return (
    <Sheet open={open} onOpenChange={close}>
      <SheetContent
        className="w-full md:w-[700px] !max-w-none bg-slate-950 text-slate-100 overflow-y-scroll"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle className="md:flex gap-6 mb-3 md:mb-6">
            <div className="relative w-full md:min-w-[300px] max-w-[500px] h-[300px] rounded-2xl mt-6 md:mt-0 overflow-hidden min-[500px]:h-[400px] md:h-[300px] md:w-[300px]">
              <Image
                src={staffDetails.image}
                width={500}
                height={500}
                alt={staffDetails.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="text-slate-100">
              <h1 className="mt-3 md:mt-0 text-left text-[16px] md:text-[20px] capitalize ">
                {staffDetails.name}
              </h1>
              <h2 className="text-left font-light text-[14px]">
                {staffDetails.rank}
              </h2>
              <h1 className="text-left italic text-[16px] font-light">
                {staffDetails.qualifications}
              </h1>
            </div>
          </SheetTitle>

          {/* ABOUT */}
          {staffDetails.about && (
            <p className="font-normal text-[14px] text-justify border-t-2 pt-2">
              {staffDetails.about}
            </p>
          )}
          {/* CONTACT */}
          <div className="mt-6">
            <p className="text-left text-xl md:text-2xl underline font-bold mb-4">
              Contact
            </p>
            <div className="flex gap-2">
              <a
                href={`mailto:${staffDetails.email}`}
                className="flex items-center gap-2 hover:text-red-600 transition duration-300"
              >
                <span>Email-</span>
                <IoMdMail className="text-[20px] text-red-600 hover:-translate-y-1 duration-200 shadow-sm" />
              </a>
              <Separator
                orientation="vertical"
                className="w-[2px] bg-slate-950 text-slate-950 h-[30px]"
              />
              <a
                href={`tel:${staffDetails.tel}`}
                className="flex items-center gap-2  hover:text-red-600 transition duration-300"
              >
                <span>Tel-</span>
                <BsTelephoneOutbound className="text-[20px] text-red-600 hover:-translate-y-1 duration-200 shadow-sm" />
              </a>
              {staffDetails.otherLinks?.map((link, index) => {
                return (
                  <>
                    <Separator
                      orientation="vertical"
                      className="w-[2px] bg-slate-950 text-slate-950 h-[30px]"
                      key={index}
                    />
                    <a
                      href={link.link}
                      className="flex items-center gap-2  hover:text-red-600 transition duration-300"
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  </>
                );
              })}
            </div>
          </div>

          {/* RESEARCH */}
          <div className="mt-8">
            <p className="text-left text-xl md:text-2xl underline font-bold mb-4">
              Research
            </p>
            <a
              href={staffDetails.googleScholar}
              className="flex items-center gap-2 hover:text-blue-700 transition duration-300 mt-2"
              target="_blank"
            >
              <span>Google Scholar-</span>
              <BsJournals className="text-[20px] text-blue-700 hover:-translate-y-1 duration-200 shadow-sm" />
            </a>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default StaffDetails;
