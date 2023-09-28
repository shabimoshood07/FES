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

const welcomeText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam? Libero, fugiat nulla pariatur voluptate repudiandae perferendis accusamus. Veritatis illo fuga id, inventore ab similique quibusdam et libero at culpa, animi quod dolorem voluptate vero. Repellat corrupti assumenda aliquam necessitatibus. Illo eum voluptates alias fugiat, sapiente voluptatem dignissimos nesciunt nulla, corporis laborum dolor reprehenderit aut? Quae necessitatibus distinctio a accusamus, ad quia esse perferendis nesciunt! Animi, psa. Corrupti ipsam voluptas, dolor nesciunt hic quidem? Officiis facere, ducimus delectus dolorum nostrum totam ratione, itaque in consequatur veritatis minima nisi consectetur at molestias eum illo aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit minima sed molestiae delectus accusantium impedit necessitatibus asperiores repellat culpa officia possimus. Laboriosam qui voluptas os odio saepe quos, nostrum fuga aut placeat vero officiis repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit, accusamus rem veniam beatae. Laboriosam quae deserunt repellendus? Enim explicabo ipsam vero repudiandae beatae delectus libero maiores arum alias ex adipisci, numquam, consequatur minima dicta fugit eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi. Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa veritatis quisquam itaque numquam excepturi debitis, magni at in ad.";

const staffList = [
  {
    name: "Prof. James O. B. Rotimi",
    image: "/BQS/HOD-BQS.png",
    rank: "Head of Department",
    programme: "Building/QS",
    email: "shabimoshood07@gmail.com",
  },
  {
    name: "AGBOOLA Shamsudeen A",
    image: "/BQS/shamsudeen.jpg",
    rank: "Lecturer II",
    programme: "Building",
    email: "shabimoshood07@gmail.com",
  },
  {
    name: "Shabi M.O",
    image: "/BQS/moshood.jpg",
    rank: "Assistant Lecturer",
    programme: "Building",
    email: "moshood.shabi@uniabuja.edu.ng",
  },
  {
    name: "BASHIR Aminu Wali",
    image: "/BQS/bashir.jpg",
    rank: "Assistant Lecturer",
    programme: "Building",
    email: "aminu.bashir@uniabuja.edu.ng",
  },
  {
    name: "ALIYYU A. Abdulraheem ",
    image: "/BQS/aliyyu.jpg",
    rank: "Graduate Assistant",
    programme: "Building",
    email: "aliyu.abdulraheem@uniabuja.edu.ng",
  },
  {
    name: "Abbas Khadija Ibrahim  ",
    image: "/BQS/khadija.jpg",
    rank: "Technologist I ",
    programme: "Building",
    email: "shabimoshood07@gmail.com",
  },
  {
    name: "Engr. ABDULSALAM A. Ridwan ",
    image: "/BQS/ridwan.jpg",
    rank: "Technologist II ",
    programme: "Building",
    email: "ridwan.abdulsalam@uniabuja.edu.ng",
  },
];

const BuildingQuantitySurveying = () => {
  return (
    <>
      <div>
        <div className="w-[96%] sm:w-[90%] mx-auto max-w-5xl ">
          <h1 className="dept-heading">
            Department of Building / Quantity surveying
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
            <div className="   md:flex justify-start mx-auto max-w-5xl">
              <div className="md:min-w-max">
                <Image
                  src="/BQS/HOD-BQS.png"
                  height={300}
                  width={300}
                  alt="Dean FES"
                  className="mx-auto block rounded-lg shadow-lg"
                />
                <p className="w-full text-center mb-3 tracking-tight font-semibold text-slate-950">
                  Prof. James O. B. Rotimi
                </p>
              </div>

              <p className="text-slate-950 text-justify leading-8 px-2 md:px-4">
                {welcomeText.slice(0, 550)}... <Link href="/#">Read more</Link>
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
                  Bachelor of Science degree in Building (B.Sc. Building)
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
                  Bachelor of Science degree in Surveying (B.Sc. Surveying)
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

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] md:max-w-none mx-auto gap-8 mt-4">
            {staffList.map((staff) => {
              return <StaffCardDeptPage staff={staff} />;
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

export default BuildingQuantitySurveying;
