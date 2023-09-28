"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeSectionsHeading from "./HomeSectionsHeading";

const programs = [
  {
    name: "B.Sc Architecture",
    href: "building-and-quantity-surveying/building",
    bg: "#64113F",
  },
  {
    name: "B.Sc Building",
    href: "building-and-quantity-surveying/building",
    bg: "#FF715B",
  },
  {
    name: "B.Sc Estate Management",
    href: "building-and-quantity-surveying/building",
    bg: "#64113F",
  },
  {
    name: "B.Sc Geoinformatics",
    href: "building-and-quantity-surveying/building",
    bg: "#64113F",
  },
  {
    name: "B.Sc Industrial Design",
    href: "building-and-quantity-surveying/building",
    bg: "#64113F",
  },
  {
    name: "B.Sc Surveying",
    href: "building-and-quantity-surveying/surveying",
    bg: "#DAA507",
  },
  {
    name: "B.Sc Urban and Regional Planning",
    href: "building-and-quantity-surveying/building",
    bg: "#64113F",
  },
];

const child = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 20,
  },
};

const Programs = () => {
  return (
    <div className=" bg-slate-500 min-h-[500px] px-4">
      <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
        <div id="new" className="absolute -top-[80px] md:-top-[126px]"></div>

        {/* <h1 className="section-heading">Programs</h1> */}

        <HomeSectionsHeading
          text="Programs"
          style="text-slate-100 after:bg-slate-100"
        />
        <Tabs defaultValue="undergraduate">
          <TabsList className="w-full overflow-x-auto  justify-start items-center h-fit bg-transparent text-slate-950 border-b-[1px] py-4 border-slate-100 rounded-none ">
            <TabsTrigger value="undergraduate" className="">
              Undergraduate Programs
            </TabsTrigger>
            <Divider
              orientation="vertical"
              className="h-5 w-[2px] bg-slate-100"
            />
            <TabsTrigger value="postgraduate">
              Postgraduate Programs
            </TabsTrigger>
            <Divider
              orientation="vertical"
              className="h-5 bg-slate-100 w-[2px]"
            />
            <TabsTrigger value="others">Other Programs</TabsTrigger>
          </TabsList>
          <TabsContent value="undergraduate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {programs.map((prog, index) => {
                const { bg } = prog;
                return (
                  <Link href={prog.href}>
                    <motion.div
                      data-index={index}
                      className={` bg-[${bg}] px-4 min-h-[100px] flex justify-start  items-center `}
                      key={index}
                      variants={child}
                      initial="offscreen"
                      whileInView={{
                        scale: 1,
                        y: [30, -30, 0],
                        transition: {
                          type: "spring",
                          bounce: 0.5,
                          duration: 1,
                        },
                        opacity: 1,
                      }}
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <p className="relative flex justify-between items-center w-full prog-name">
                        {prog.name} <ArrowRight />
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="postgraduate">
            <div className="flex justify-start items-center">
              <h1 className="text-[30px] text-left">Coming Soon !!! ⏳⏳</h1>
            </div>
          </TabsContent>
          <TabsContent value="others">
            <div className="flex justify-start items-center">
              <h1 className="text-[30px] text-left">Coming Soon !!! ⏳⏳</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Programs;
