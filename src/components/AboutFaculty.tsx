"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import HomeSectionsHeading from "./HomeSectionsHeading";
const about =
  "The new Faculty of Environmental Sciences is poised to take a leading role in nurturing a new wave of built environment professionals instilling contemporary innovative skills and knowledge frontier. The faculty is berthed with seven (7) undergraduate programmes culminating in the award of B.Sc degrees in Architecture, Building, Estate Management, Industrial Design, Quantity Surveying, and Urban and Regional Planning. The programmes are, at inception, domiciled under four full-fledged departments viz Architecture and Industrial Design; Building and Quantity Surveying; Estate Management and Urban and Regional Planning; and Surveying and Geoinformatics. All the programmes await the approval of the NUC following the earlier resource verification exercise. In order to chart a new path to building creative and solution-driven professionals, the faculty is partnering, or in the process of collaborating with the professional bodies in the built environment, the Federal Ministry of Housing and Urban Development (FMHUD), the UN-Habitat, Climate Change activists, relevant government parastatals and not-for--profit organisations and selected communities in the Federal Capital towards fostering a triple helix model for impactful knowledge sharing, public engagement, and community service. The faculty, through the various departments, is open to enduring and mutually beneficial collaboration and partnerships with interested parties including corporate entities and international organisations.";

const AboutFaculty = () => {
  const [words, setWords] = useState(700);
  const heading = useRef(null);
  const text = useRef(null);
  const isInView = useInView(heading, { once: true });
  const textIsInView = useInView(text, { once: true });

  return (
    <div className="bg-white min-h-[500px] relative">
      <div id="about" className="absolute -top-[80px] md:-top-[126px]"></div>
      <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
        <div className="mx-auto max-w-5xl">
          <HomeSectionsHeading text="About the Faculty" style="text-slate-950 after:bg-slate-950"/>
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
                className="text-slate-500"
                onClick={() =>
                  words === 700 ? setWords(about.length) : setWords(700)
                }
              >
                {words === 700 ? "... Read more" : "...Collapse"}
              </button>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFaculty;
