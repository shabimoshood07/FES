import LongTextReadMore from "@/components/LongTextReadMore";
import StaffCardDeptPage from "@/components/StaffCardDeptPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ESM_staff_list } from "@/data/URP_ESM/ESM";
import { URP_staff_list } from "@/data/URP_ESM/URP";
import { HOD_profile, HOD_welcome_text } from "@/data/URP_ESM/HOD";

const EsmUrp = () => {
  return (
    <>
      <div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl ">
          <h1 className="dept-heading">
            Department of Estate management / Urban and regional planning
          </h1>

          {/* Dept navigation */}
          <ul className="flex flex-col  justify-start gap-3 py-4 mb-6 border border-slate-500 rounded-lg w-fit px-3">
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
              <div className="md:min-w-max max-h-[500px]">
                <Image
                  src={HOD_profile.image}
                  height={300}
                  width={300}
                  alt="Dean FES"
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
                  Bachelor of Science degree in Estate Management (B.Sc. Estate
                  Management)
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-justify py-2 max-w-5xl leading-8">
                  Estate Management is art and science of supervising the use,
                  development and management of landed property, other natural
                  resources and the built environment. The estate management
                  programme is intended to prepare students to appreciate the
                  complexity of legal, economic, technological and social
                  impacts on the use, development and management of land and the
                  environment. The emerging world trend in technological
                  advancement and environmental concern, calls for the need to
                  design responsive programmes for the training of future
                  graduates in Estate Management. The degree envisaged is B. Sc.
                  Estate Management and Valuation. It has taken the University
                  of Abuja too long a time to establish a department of Estate
                  Management and Valuation. It is therefore heart-warming that
                  in the preceding expansion programme of the University,
                  Department of Estate Management and Valuation received
                  attention. The senate of the University supported the
                  University Management proposal of the establishment of
                  Department of Estate Management and Valuation in the
                  University and 2023/2024 was approved as the commencement
                  period. The programme is structured to equip the graduates
                  with the requisite academic and practical knowledge to meet
                  the mission of the programme which is to educate and train
                  graduates for sound scientific, technical, entrepreneurial and
                  managerial skills for estate surveying and valuation practice
                  for the benefit and satisfaction of clients and the society.
                  In pursuit of this mission, courses have been drawn from other
                  disciplines such as Economics, Agriculture, Physical Sciences,
                  Accounting and Management, Computer science, Law and Social
                  Sciences as well as other disciplines in the Environmental
                  Sciences. Courses offered in the Department are categorized
                  into three, namely compulsory (C), required (R) and elective
                  (E) courses. The department has 106 units of core courses, 87
                  units of required courses and 20 units of elective courses
                  available for offering. Students are expected to take all the
                  compulsory and required courses compulsorily and take the
                  specified minimum units of elective courses. For graduation,
                  the student must have taken and passed all the compulsory and
                  required courses as well as the specified minimum 12 units of
                  electives with total credit units not less than the minimum
                  specified units for graduation in the University Academic
                  Regulation. Department of Estate Management and Valuation
                  Programme is marketable in terms of patronage and enrolment as
                  well as job opportunities for the products. The products are
                  to be functional and useful and are hopefully to be in demand
                  in national affairs as well as international services.
                </p>

                <Link href="/estate-management-urban-and-regional-planning/#resources">
                  <Button>View Programme resources</Button>
                </Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <li className="text-left">
                  Bachelor of Science degree in Urban and Regional Planning
                  (B.Sc. Urban and Regional Planning)
                </li>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-justify py-2 max-w-3xl leading-8">
                  The Bachelor of Science Urban and Regional Planning (B.Sc.
                  URP) is a five years professional program that offers training
                  to students and equips them with the knowledge base and
                  analytical as well as design skills to address contemporary
                  issues that affect the quality of life in humansettlements.
                  This is achieved through rigorous training in the production
                  of master plans, regional plans, sector plans, city plans and
                  neighbourhood plans. The curriculum consists of planning
                  lecture courses, studios, and professional planning practice
                  courses that give students real-world planning experience.
                  Graduates of the program qualify for positions in a variety of
                  public and private organizations, including local planning
                  authorities, state urban development boards and national
                  planning commission and departments; non-profit organizations,
                  and private sector planning and development firms.
                </p>

                <Link href="/estate-management-urban-and-regional-planning/#resources">
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

          <h1 className="mt-10 text-[20px] ml-6 font-semibold">
            Estate Management
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {ESM_staff_list.map((staff, index) => {
              return <StaffCardDeptPage staff={staff} key={index} />;
            })}
          </div>

          <h1 className="mt-10 text-[20px] ml-6 font-semibold">
            Urban and Regional Planning
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {URP_staff_list.map((staff, index) => {
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

export default EsmUrp;
