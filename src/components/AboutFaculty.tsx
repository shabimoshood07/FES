"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import HomeSectionsHeading from "./HomeSectionsHeading";
import MotionDiv from "./MotionDiv";
const about =
  "The new Faculty of Environmental Sciences is poised to take a leading role in nurturing a new wave of built environment professionals instilling contemporary innovative skills and knowledge frontier. The faculty is berthed with seven (7) undergraduate programmes culminating in the award of B.Sc degrees in Architecture, Building, Estate Management, Industrial Design, Quantity Surveying, and Urban and Regional Planning. The programmes are, at inception, domiciled under four full-fledged departments viz Architecture and Industrial Design; Building and Quantity Surveying; Estate Management and Urban and Regional Planning; and Surveying and Geoinformatics. All the programmes await the approval of the NUC following the earlier resource verification exercise. In order to chart a new path to building creative and solution-driven professionals, the faculty is partnering, or in the process of collaborating with the professional bodies in the built environment, the Federal Ministry of Housing and Urban Development (FMHUD), the UN-Habitat, Climate Change activists, relevant government parastatals and not-for--profit organisations and selected communities in the Federal Capital towards fostering a triple helix model for impactful knowledge sharing, public engagement, and community service. The faculty, through the various departments, is open to enduring and mutually beneficial collaboration and partnerships with interested parties including corporate entities and international organisations.";

const AboutFaculty = () => {
  const [words, setWords] = useState(700);
  const heading = useRef(null);
  const text = useRef(null);
  const isInView = useInView(heading, { once: true });
  const textIsInView = useInView(text, { once: true });

  return (
    <div className="bg-slate-500 text-slate-100 min-h-[500px] relative">
      <div id="about" className="absolute -top-[80px] md:-top-[126px]"></div>
      <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
        <HomeSectionsHeading
          text="About the Faculty"
          style="text-slate-100 after:bg-slate-100"
        />
        <p
          className="text-justify leading-8 py-6 h-fit duration-500"
          ref={text}
          style={{
            transform: textIsInView ? "none" : "translateY(100px)",
            opacity: textIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          {about.slice(0, words)}
          {
            <button
              className="text-slate-950"
              onClick={() =>
                words === 700 ? setWords(about.length) : setWords(700)
              }
            >
              {words === 700 ? "... Read more" : "...Collapse"}
            </button>
          }
        </p>

        <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 border-t-2 pt-3">
          <MotionDiv style="md:border-r-2 md:pr-3">
            <h1 className="text-[20px] font-semibold italic tracking-widest">
              Vision
            </h1>
            <p className="text-justify leading-7">
              The Faculty of Environmental Sciences at the University of Abuja
              is a leader in engineering and computer science education and
              research, providing its students with top quality degrees and
              experiential learning experiences to prepare them to meet the
              ever-changing needs of society.
            </p>
          </MotionDiv>
          <MotionDiv>
            <h1 className="text-[20px] font-semibold italic tracking-widest">
              Mission
            </h1>
            <p className="text-justify leading-7">
              We are committed to offering a top-level education that provides
              learning and training opportunities for all, that connect students
              with businesses and businesses with students, so that all of us,
              together, can shape tomorrow’s reality.
            </p>
          </MotionDiv>
        </div>
        <div className="my-4">
          <h1 className="text-[20px] font-semibold italic tracking-widest">
            Management Team
          </h1>

          <p>Should conatian management team</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFaculty;
