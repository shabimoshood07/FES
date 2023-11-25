"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import LongTextReadMore from "./LongTextReadMore";
import AboutDean from "./modals/AboutDean";

const welcomeText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam? Libero, fugiat nulla pariatur voluptate repudiandae perferendis accusamus. Veritatis illo fuga id, inventore ab similique quibusdam et libero at culpa, animi quod dolorem voluptate vero. Repellat corrupti assumenda aliquam necessitatibus. Illo eum voluptates alias fugiat, sapiente voluptatem dignissimos nesciunt nulla, corporis laborum dolor reprehenderit aut? Quae necessitatibus distinctio a accusamus, ad quia esse perferendis nesciunt! Animi, psa. Corrupti ipsam voluptas, dolor nesciunt hic quidem? Officiis facere, ducimus delectus dolorum nostrum totam ratione, itaque in consequatur veritatis minima nisi consectetur at molestias eum illo aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit minima sed molestiae delectus accusantium impedit necessitatibus asperiores repellat culpa officia possimus. Laboriosam qui voluptas os odio saepe quos, nostrum fuga aut placeat vero officiis repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit, accusamus rem veniam beatae. Laboriosam quae deserunt repellendus? Enim explicabo ipsam vero repudiandae beatae delectus libero maiores arum alias ex adipisci, numquam, consequatur minima dicta fugit eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi. Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa in consequatur veritatis minima nisi consectetur at molestias eum illo aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit minima sed molestiae delectus accusantium impedit necessitatibus asperiores repellat culpa officia possimus. Laboriosam qui voluptas os odio saepe quos, nostrum fuga aut placeat vero officiis repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit, accusamus rem veniam beatae. Laboriosam quae deserunt repellendus? Enim explicabo ipsam vero repudiandae beatae delectus libero maiores arum alias ex adipisci, numquam, consequatur minima dicta fugit eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi. Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa veritatis quisquam itaque numquam excepturi debitis, magni at in ad.";

function DeanWelcomeText() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const dean = {
    name: "Prof. Abdullateef I. Bako",
    image: "/Dean FES.jpeg",
    rank: "Professor",
    programme: "Urban and Regional Planning",
    email: "abdullateef.bako@uniabuja.edu.ng",
    tel: "",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=w9150mUAAAAJ",
    otherLinks: [
      {
        name: "Web of Science",
        link: "https://www.webofscience.com/wos/author/record/ISS-1066-2023",
      },
      {
        name: "Scopus",
        link: "https://www.scopus.com/authid/detail.uri?authorId=56160038000",
      },
    ],
    qualifications:
      "PhD (FUTA), M.URP (UI), MBA. Exec (LAUTECH), BSc.(NOUN),RTP, MNITP, NES",
  };
  return (
    <div className="pb-10 bg-white px-4 min-h-[500px]">
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
        <div className="   md:flex justify-start mx-auto max-w-5xl gap-6">
          <div className="md:min-w-max">
            <Image
              src="/Dean FES.jpeg"
              height={300}
              width={300}
              alt="Dean FES"
              className="mx-auto block rounded-lg shadow-lg"
            />
            <p className="my-4 w-full text-center mb-3 tracking-tight font-semibold text-slate-950">
              Dean: Prof. Abdullateef I. Bako
            </p>
            <button onClick={() => setOpen(true)} className="flex justify-center items-center gap-2 w-full">
              <span className="text-[14px] font-semibold">About the dean</span>
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
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <p className="text-justify">
            <LongTextReadMore visiblecharacter={700} longText={welcomeText} />
          </p>
        </div>
      </div>
      <AboutDean open={open} close={close} staffDetails={dean} />
    </div>
  );
}

export default DeanWelcomeText;
