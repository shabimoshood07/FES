import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import Image from "next/image";
import React from "react";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "py-2 md:py-3",
      }}
      className="md:hidden"
    >
      <NavbarContent className="pr-3 mx-auto" justify="center">
        <NavbarBrand className="mx-auto">
          <Image
            src="https://www.uniabuja.edu.ng/images/logo.png"
            height={400}
            width={400}
            alt="uniabuja logo"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu
        className="!text-black  pt-10 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <NavbarMenuItem className="py-4">
          <Link className="w-full " href="/">
            <Link href="/">Home</Link>
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem className="py-4">
          <Link className="w-full" href="#">
            About the faculty
          </Link>
        </NavbarMenuItem>
        <Divider />
        <Accordion className="!px-0">
          <AccordionItem key="1" aria-label="Accordion 1" title="Departments">
            <Divider />

            <NavbarMenuItem className="py-2 pl-3">
              <Link className="nav-sublink w-full text-sm relative" href="#">
                Architecture / Industrial design
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem className="py-2 pl-3">
              <Link
                className="w-full text-sm nav-sublink relative"
                href="building-and-quantity-surveying"
              >
                Building / Quantity surveying
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem className="py-2 pl-3">
              <Link className="w-full text-sm nav-sublink relative" href="#">
                Estate management / Urban and regional planning
              </Link>
            </NavbarMenuItem>

            <NavbarMenuItem className="py-2 pl-3">
              <Link className="w-full text-sm nav-sublink relative" href="#">
                Surveying / Geoinformatics
              </Link>
            </NavbarMenuItem>
          </AccordionItem>
        </Accordion>
        <Divider />

        <NavbarMenuItem className="py-4">
          <Link className="w-full " href="#">
            Faculty news
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem className="py-4">
          <Link className="w-full " href="#events">
            Events
          </Link>
        </NavbarMenuItem>
        <Divider />
      </NavbarMenu>
      <DesktopNav />
    </Navbar>
  );
};

export default MobileNav;
