"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";

const welcomeText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam? Libero, fugiat nulla pariatur voluptate repudiandae perferendis accusamus. Veritatis illo fuga id, inventore ab similique quibusdam et libero at culpa, animi quod dolorem voluptate vero. Repellat corrupti assumenda aliquam necessitatibus. Illo eum voluptates alias fugiat, sapiente voluptatem dignissimos nesciunt nulla, corporis laborum dolor reprehenderit aut? Quae necessitatibus distinctio a accusamus, ad quia esse perferendis nesciunt! Animi, psa. Corrupti ipsam voluptas, dolor nesciunt hic quidem? Officiis facere, ducimus delectus dolorum nostrum totam ratione, itaque in consequatur veritatis minima nisi consectetur at molestias eum illo aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit minima sed molestiae delectus accusantium impedit necessitatibus asperiores repellat culpa officia possimus. Laboriosam qui voluptas os odio saepe quos, nostrum fuga aut placeat vero officiis repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit, accusamus rem veniam beatae. Laboriosam quae deserunt repellendus? Enim explicabo ipsam vero repudiandae beatae delectus libero maiores arum alias ex adipisci, numquam, consequatur minima dicta fugit eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi. Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa veritatis quisquam itaque numquam excepturi debitis, magni at in ad.";

function DeanWelcomeText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    // <motion.div
    //   className="pt-2 pb-8 bg-slate-300 px-4"
    //   animate={{ y: [0, 100, 0] }}
    //   //   hidden={true}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     // repeat: Infinity,
    //     // repeatDelay: 1,
    //     // type: "spring",
    //   }}
    // >
    <div className="pb-10 bg-white px-4 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-126px)]">
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .1s",
          overflow: "hidden",
          paddingTop: "1rem",
        }}
        ref={ref}
      >
        <h1 className="text-center text-[25px] md:text-[30px] lg:text-[40px] mb-8 underline underline-offset-4 text-slate-950 font-bold">
          Welcome to the Faculty of Enviromental Sciences
        </h1>
        <div className="   md:flex justify-start mx-auto max-w-5xl">
          <div className="md:min-w-max">
            <Image
              src="/Dean FES.jpeg"
              height={300}
              width={300}
              alt="Dean FES"
              className="mx-auto block rounded-lg shadow-lg"
            />
            <p className="w-full text-center mb-3 tracking-tight font-semibold text-slate-950">
              Dean: Prof. Abdullateef I. Bako
            </p>
          </div>

          <p className="text-slate-950 text-justify leading-8 md:px-4">
            {welcomeText.slice(0, 550)}... <Link href="/#">Read more</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeanWelcomeText;
