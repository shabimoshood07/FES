"use cliebt";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
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
    <div className="bg-slate-500 py-3 px-4 rounded-xl shadow-lg !text-slate-100 md:hover:scale-110 duration-400">
      <div className="flex justify-start items-start gap-4 ">
        <Avatar className="h-20 w-20 shadow-lg border-2 border-slate-950">
          <AvatarImage src={staff.image} />
          <AvatarFallback>{staff.name}</AvatarFallback>
        </Avatar>
        {/* <Image
          src={staff.image}
          height={100}
          width={100}
          alt={staff.name}
          className="rounded-full"
        /> */}
        <div>
          <h1 className=" text-[13px] bold">{staff.name}</h1>
          <p className=" text-[12px] italic">{staff.rank}</p>
        </div>
      </div>
      <Link href={`mailto:${staff.email}`}>
        <p className=" my-2 text-[12px]">@{staff.email}</p>
      </Link>
    </div>
  );
};

export default StaffCardDeptPage;
