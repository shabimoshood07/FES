import LongTextReadMore from "@/components/LongTextReadMore";
import StaffCardDeptPage from "@/components/StaffCardDeptPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HOD_profile, HOD_welcome_text } from "@/data/SVG/HOD";
import { SVG_staff_list } from "@/data/SVG/SVG";
import Image from "next/image";
import Link from "next/link";

const SurveyingGeoinformatics = () => {
  return (
    <>
      <div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl ">
          <h1 className="dept-heading">
            Department of Surveying / Geoinformatics
          </h1>

          {/* Dept navigation */}
          <ul className="flex flex-col justify-start gap-3 py-4 mb-6 border border-slate-500 rounded-lg w-fit px-3">
            <li className="list-disc list-inside">
              <Link href="#programs" className="text-[13px] italic ">
                List of Programs
              </Link>
            </li>
            <li className="list-disc list-inside">
              <Link href="#staffs" className="text-[13px] italic ">
                Staff List
              </Link>
            </li>
            <li className="list-disc list-inside">
              <Link href="#resources" className="text-[13px] italic ">
                Resources
              </Link>
            </li>
          </ul>

          <div>
            <h1 className="text-center text-[18px] md:text-[25px] lg:text-[30px] mb-4  text-slate-950 font-bold">
              Head of Department
            </h1>
            <div className="   md:flex justify-start mx-auto max-w-5xl pb-6">
              <div className="md:min-w-max">
                <Image
                  src={HOD_profile.image}
                  height={300}
                  width={300}
                  alt="HOD SVG"
                  className="mx-auto block rounded-lg shadow-lg"
                />
                <p className="w-full text-center mb-3 tracking-tight font-semibold text-slate-950">
                  {HOD_profile.name}
                </p>
              </div>

              <p className="text-slate-950 text-justify leading-8 px-2 md:px-4 transition-all duration-1000">
                <LongTextReadMore
                  longText={HOD_welcome_text}
                  visiblecharacter={700}
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* List of programs */}
      <div className=" relative bg-slate-500 min-h-[500px] text-slate-100">
        <div
          id="programs"
          className="absolute -top-[80px] md:-top-[126px]"
        ></div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
          <h1 className="program-heading">List of Programs</h1>

          <p className="text-base py-3">
            The Department offers the following programs
          </p>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <li className="text-left">
                  Bachelor of Science degree Surveying and Geoinformatics (B.Sc.
                  Estate Management)
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-justify py-2 max-w-xl leading-8">
                  The building degree programme of the university was
                  established in the university in the year 2023 and it is
                  designed to prepare students for careers in the building
                  industry by providing a comprehensive education that emphasise
                  both theoretical and practical knowledge in the construction,
                  operation, maintenance and deconstruction of buildings that
                  are compliant, safe, sustainable, and environmentally sound.
                </p>

                <Link href="/building-and-quantity-surveying/building">
                  <Button>View Programme resources</Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* List of staffs */}
      <div className="bg-white min-h-[600px] relative">
        <div id="staffs" className="absolute -top-[80px] md:-top-[126px]"></div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
          <h1 className="program-heading section-heading">List of Staff</h1>
          <h1 className="mt-8 text-[20px] ml-6 font-semibold">
            Head of Department
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            <StaffCardDeptPage staff={HOD_profile} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {SVG_staff_list.map((staff, index) => {
              return <StaffCardDeptPage staff={staff} key={index} />;
            })}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-slate-500 min-h-[700px] relative">
        <div
          id="resources"
          className="absolute -top-[80px] md:-top-[126px]"
        ></div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl py-6">
          <h1 className="program-heading section-heading">Resources</h1>
        </div>
      </div>
    </>
  );
};

export default SurveyingGeoinformatics;
