import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Prop = {
  name: string;
  image: string;
  rank: string;
  programme: string;
  email: string;
};

const StaffCardDeptPage = ({ staff }: { staff: Prop }) => {
  return (
    <>
      <div className=" py-3 px-4 rounded-xl border-b-2 !text-slate-950 md:hover:scale-110 duration-400">
        <div className="flex justify-start items-start gap-4 ">
          <Avatar className="h-20 w-20 shadow-lg border-2 border-slate-950">
            <AvatarImage src={staff.image} />
            <AvatarFallback>{staff.name}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className=" text-[13px] bold">{staff.name}</h1>
            <p className=" text-[12px] italic">{staff.rank}</p>
            <footer className=" flex justify-start mt-1">
              <Link href={`mailto:${staff.email}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e0e0e0"
                    d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                  ></path>
                  <path
                    fill="#d9d9d9"
                    d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                  ></path>
                  <path
                    fill="#eee"
                    d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                  ></path>
                  <path
                    fill="#e0e0e0"
                    d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                  ></path>
                  <path
                    fill="#ca3737"
                    d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                  ></path>
                  <path
                    fill="#f5f5f5"
                    d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                  ></path>
                  <path
                    fill="#e84f4b"
                    d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                  ></path>
                </svg>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCardDeptPage;
