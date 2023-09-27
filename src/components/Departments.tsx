"use client";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const dept = [
  {
    name: "Architecture / Industrial design",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam nam laudantium aspernatur officiis repudiandae illo",
    href: "/architecture",
  },
  {
    name: "Building / Quantity surveying",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam nam laudantium aspernatur officiis repudiandae illo",
    href: "building-and-quantity-surveying",
    icon: () => (
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    name: "Estate management / Urban and regional planning",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam nam laudantium aspernatur officiis repudiandae illo",
    href: "",
  },
  {
    name: "Surveying / Geoinformatics",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam nam laudantium aspernatur officiis repudiandae illo",
    href: "",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 * i },
  }),
};

const child = {
  // hidden: { y: [50, -100], opacity: 0 },
  offscreen: {
    scale: 0,
    opacity: 0,
    y: [50, -100, 50],
  },
  // visible: {
  //   y: 0,
  //   opacity: 1,
  // },
};

const Departments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className=" bg-white text-slate-100 py-10 px-4 min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-126px)]">
      <div className="mx-auto max-w-5xl">
        <motion.h1 className="section-heading  text-slate-950 mb-6">
          Departments
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2  gap-12 justify-center items-center "
          style={{
            transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .1s",
            overflow: "hidden",
          }}
        >
          {dept.map((dep, index) => {
            return (
              <motion.div
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
                className="relative group overflow-hidden bg-slate-950 min-h-[200px] rounded-lg  shadow-2xl p-4 flex flex-col items-center justify-center"
              >
                <h1 className="text-center group-hover:-translate-x-[500%] duration-500 font-bold text-[20px] inline gap-3">
                  {dep.name}
                  {dep.icon && dep.icon()}
                </h1>
                <footer className="absolute flex justify-center flex-col items-center -right-[200%] duration-500 t w-full h-full group-hover:right-0 ">
                  <h1 className="underline underline-offset-4 py-2">
                    {dep.name}
                  </h1>
                  <p className="text-center px-2">{dep.info}</p>
                  <Link href={dep.href} className="w-full">
                    <motion.button
                      className="w-1/2 block mx-auto bg-slate-300 text-slate-950 my-3 py-1 hover:text-slate-300 hover:bg-slate-500 duration-300 rounded-md"
                      animate={{
                        scale: [1, 1.5, 1],
                        type: ["spring"],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    >
                      Visit
                    </motion.button>
                  </Link>
                </footer>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Departments;
