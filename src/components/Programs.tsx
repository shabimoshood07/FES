"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  // hidden: { y: [50, -100], opacity: 0 },
  offscreen: {
    scale: 1,
    opacity: 0,
    y: [50, -100, 50],
  },
  // visible: {
  //   y: 0,
  //   opacity: 1,
  // },
};

const Programs = () => {
  return (
    <div className=" bg-slate-500 text-slate-100 py-10 px-4 min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-126px)]">
      <div className="mx-auto max-w-5xl">
        <motion.h1
          className="section-heading  mb-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Programs
        </motion.h1>

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
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 1.8,
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
            <div>
              <h1>Coming Soon !!! ⏳⏳</h1>
            </div>
          </TabsContent>
          <TabsContent value="others">
            <div>
              <h1>Coming Soon !!! ⏳⏳</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Programs;
