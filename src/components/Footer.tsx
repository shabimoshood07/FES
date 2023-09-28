"use client";
import {
  ArrowBigRight,
  MailIcon,
  MessageSquare,
  PhoneCallIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { programs } from "./Programs";
import { dept } from "./Departments";
import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className=" bg-slate-500 text-slate-950 py-10 px-4 min-h-[400px]">
      <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] font-semibold">Contact</h1>
          <Link href="mailto:info@fesuniabuja.com">
            <p className="flex gap-2 hover:text-slate-100 text-[14px]">
              Send email <MailIcon />
            </p>
          </Link>
          <Link href="tel:1234567890">
            <p className="flex gap-2 hover:text-slate-100 text-[14px]">
              General enquiry <PhoneCallIcon />
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] font-semibold">Links</h1>
          <Link href="www.uniabuja.edu.ng">
            <Image
              src="/logo.png"
              height={300}
              width={300}
              alt="uniabuja"
              className="text-slate-100"
            />
          </Link>
          <Link href="/">
            <p className="flex gap-2 hover:text-slate-100 text-[14px]">
              Faculty of Environmental Sciences
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] font-semibold">Programs</h1>

          {programs.map((prog) => (
            <Link href={prog.href}>
              <p className="flex justify-between items-start gap-2 hover:text-slate-100 text-[14px]">
                {prog.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-[20px] font-semibold">Department</h1>
          {dept.map((dep) => (
            <Link href={dep.href}>
              <p className="flex gap-2 hover:text-slate-100 justify-between text-[14px]">
                {dep.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
