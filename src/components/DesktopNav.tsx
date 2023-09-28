"use client";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const DesktopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="hidden md:flex"
      height="fit-content"
      classNames={{
        wrapper: "px-0 gap-2 w-full max-w-none",
      }}
    >
      <NavbarContent className="pr-3 mx-auto" justify="center">
        <NavbarBrand className="mx-auto ">
          <Image
            src="https://www.uniabuja.edu.ng/images/logo.png"
            height={400}
            width={400}
            alt="uniabuja logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <nav className="bg-slate-500 text-slate-100 w-full ">
        <div className="hidden md:flex justify-between items-center py-4 mx-auto w-[95%] max-w-5xl">
          <div>
            <Link href="/">Home</Link>
          </div>

          <div>
            <Link href="/#about">About the Faculty</Link>
          </div>

          <div>
            <Menubar className="!bg-transparent border-none cursor-pointer">
              <MenubarMenu>
                <MenubarTrigger className="!bg-transparent !text-slate-100 cursor-pointer">
                  Departments
                </MenubarTrigger>
                <MenubarContent align="center" sideOffset={15} className="pb-4">
                  <Link
                    className="nav-sublink !text-center relative text-base"
                    href="architecture-and-industrial-design"
                  >
                    <MenubarItem className="cursor-pointer !text-center">
                      Architecture / Industrial design
                    </MenubarItem>
                  </Link>
                  <Link
                    className=" text-base nav-sublink relative text-center"
                    href="/building-and-quantity-surveying"
                  >
                    <MenubarItem className="cursor-pointer !text-center">
                      Building / Quantity surveying
                    </MenubarItem>
                  </Link>
                  <MenubarSeparator />{" "}
                  <Link
                    className=" nav-sublink relative text-center text-base"
                    href="estate-management-urban-and-regional-planning"
                  >
                    <MenubarItem className="cursor-pointer !text-center">
                      Estate management / Urban and regional planning
                    </MenubarItem>
                  </Link>
                  <MenubarSeparator />{" "}
                  <Link
                    className="text-base nav-sublink relative text-center "
                    href="surveying-and-geoinformatics"
                  >
                    <MenubarItem className="cursor-pointer !text-center">
                      Surveying / Geoinformatics
                    </MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <div>
            <Link className="w-full " href="/#news">
              Faculty news
            </Link>
          </div>
          <div>
            <Link className="w-full " href="/#events">
              Events
            </Link>
          </div>
        </div>
      </nav>
    </Navbar>
  );
};

export default DesktopNav;

{
  /* <HoverCard openDelay={200} closeDelay={100}>
<HoverCardTrigger className="cursor-pointer flex items-center gap-4">
  Departments
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
</HoverCardTrigger>
<HoverCardContent
  className="flex flex-col items-center w-max gap-4"
  sideOffset={10}
  alignOffset={100}
  onClick={}
>
  <Link
    className="nav-sublink text-center relative text-base"
    href="architecture-and-industrial-design"
  >
    Architecture / Industrial design
  </Link>
  <Link
    className=" text-base nav-sublink relative text-center"
    href="/building-and-quantity-surveying"
  >
    Building / Quantity surveying
  </Link>
  <Link
    className=" nav-sublink relative text-center text-base"
    href="estate-management-urban-and-regional-planning"
  >
    Estate management / Urban and regional planning
  </Link>
  <Link
    className="text-base nav-sublink relative text-center "
    href="surveying-and-geoinformatics"
  >
    Surveying / Geoinformatics
  </Link>
</HoverCardContent>
</HoverCard> */
}
