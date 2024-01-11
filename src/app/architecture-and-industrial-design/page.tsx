import LongTextReadMore from "@/components/LongTextReadMore";
import StaffCardDeptPage from "@/components/StaffCardDeptPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ARC_staff_list } from "@/data/ARC_IND/ARC";
import { HOD_profile } from "@/data/ARC_IND/HOD";
import { IND_staff_list } from "@/data/ARC_IND/IND";
import Image from "next/image";
import Link from "next/link";

const welcomeText =
  "I am excited to extend a warm welcome to everyone who has shown interest in our newly approved Department of Building and Quantity Surveying at the University of Abuja, Nigeria. Our department has undergone a rigorous approval process by the National Universities Commission (NUC), which evaluates academic programmes in Nigerian universities to ensure that they meet the provisions of relevant minimum academic standards. This achievement is a testament to the unwavering commitment of the University of Abuja, under the visionary leadership of the Vice Chancellor Prof Abdulrasheed Na’Allah, to transform our institution into a model university in Nigeria through his robust developmental initiatives. As the pioneer Head of Department, I am honoured to lead a team of dedicated faculty, staff, and students who share a vision of pushing the boundaries of knowledge and fostering innovation in the built environment field. Our goal is to provide an academic programme that enables the acquisition of cutting-edge knowledge, intellectual and analytical capabilities, creativity, and problem-solving abilities necessary to compete globally in the built environment workplace. We believe that our graduates should be well-equipped to navigate complex client requirements and be globally relevant in an ever-changing work environment. At the Department of Building and Quantity Surveying, we are determined to provide a solid academic base and professional expertise for the Building and Quantity Surveying disciplines. We understand the importance of collaboration and partnership, and we are committed to actively collaborating with all accrediting educational and professional bodies, locally and internationally, to drive positive change and address the most pressing issues of our time. Our newly established department is poised to make remarkable contributions to the built environment field and the world at large. Therefore, I invite you to explore our pages, engage with our faculty and staff, and connect with our students. Thank you for visiting our webpage and showing interest in the Department of Building and Quantity Surveying at the University of Abuja, the only Federal University in the heart (FCT) of Nigeria, the University for National Unity!";

const ArchitectureIndustrialDesign = () => {
  return (
    <>
      <div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl ">
          <h1 className="dept-heading">
            Department of Architecture / Industrial design
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
                  src=""
                  height={300}
                  width={300}
                  alt="HOD"
                  className="mx-auto block rounded-lg shadow-lg"
                />
                <p className="w-full text-center mb-3 tracking-tight font-semibold text-slate-950">
                  HOD
                </p>
              </div>

              <p className="text-slate-950 text-justify leading-8 px-2 md:px-4 transition-all duration-1000">
                <LongTextReadMore
                  longText={welcomeText}
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
                  Bachelor of Science degree in Architecture (B.Sc.
                  Architecture)
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

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <li className="text-left">
                  Bachelor of Science degree in Industrial Design (B.Sc.
                  Industrial Design)
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

                <Link href="/building-and-quantity-surveying/surveying">
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
            <StaffCardDeptPage staff={HOD_profile} />;
          </div>
          <h1 className="mt-8 text-[20px] ml-6 font-semibold">Architecture</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {ARC_staff_list.map((staff, index) => {
              return <StaffCardDeptPage staff={staff} key={index} />;
            })}
          </div>
          <h1 className="mt-8 text-[20px] ml-6 font-semibold">
            Industrial Design
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {IND_staff_list.map((staff, index) => {
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

export default ArchitectureIndustrialDesign;
