import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";

const welcomeText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ipsam? Libero, fugiat nulla pariatur voluptate repudiandae perferendis accusamus. Veritatis illo fuga id, inventore ab similique quibusdam et libero at culpa, animi quod dolorem voluptate vero. Repellat corrupti assumenda aliquam necessitatibus. Illo eum voluptates alias fugiat, sapiente voluptatem dignissimos nesciunt nulla, corporis laborum dolor reprehenderit aut? Quae necessitatibus distinctio a accusamus, ad quia esse perferendis nesciunt! Animi, psa. Corrupti ipsam voluptas, dolor nesciunt hic quidem? Officiis facere, ducimus delectus dolorum nostrum totam ratione, itaque in consequatur veritatis minima nisi consectetur at molestias eum illo aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit minima sed molestiae delectus accusantium impedit necessitatibus asperiores repellat culpa officia possimus. Laboriosam qui voluptas os odio saepe quos, nostrum fuga aut placeat vero officiis repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit, accusamus rem veniam beatae. Laboriosam quae deserunt repellendus? Enim explicabo ipsam vero repudiandae beatae delectus libero maiores arum alias ex adipisci, numquam, consequatur minima dicta fugit eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi. Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa veritatis quisquam itaque numquam excepturi debitis, magni at in ad.";

const page = () => {
  return (
    <>
      <div>
        <div className="w-[98%] mx-auto max-w-5xl">
          <h1 className="dept-heading">
            Department of Building / Quantity surveying
          </h1>

          {/* Dept navigation */}
          <ul>
            <li>
              <Link href="#programs">List of Programs</Link>
            </li>
            <li>
              <Link href="#staffs">Staff List</Link>
            </li>
          </ul>

          <div>
            <h1 className="text-center text-[18px] md:text-[25px] lg:text-[30px] mb-4  text-slate-950 font-bold">
              Head of Department
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
                  Prof. Abdullateef I. Bako
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
      <div className=" relative bg-slate-500 min-h-screen">
        <div
          id="programs"
          className="absolute -top-[80px] md:-top-[126px]"
        ></div>
        <div className="w-[98%] mx-auto max-w-5xl pt-10">
          <h1 className="program-heading section-heading">List of Programs</h1>

          <Link href="/building-and-quantity-surveying/building">
            <p>BSc Building</p>
          </Link>
          <Link href="/building-and-quantity-surveying/surveying">
            <p>BSc Building</p>
          </Link>
        </div>
      </div>

      {/* List of staffs */}
      <div className="bg-white min-h-screen relative">
        <div id="staffs" className="absolute -top-[80px] md:-top-[126px]"></div>
        <div className="w-[98%] mx-auto max-w-5xl pt-10">
          <h1 className="program-heading section-heading">List of Staff</h1>
        </div>
      </div>
    </>
  );
};

export default page;
