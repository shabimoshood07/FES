import { Media } from "../../../public/media";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-[96%] sm:w-[90%] mx-auto max-w-6xl py-7">
      {Media.map((file, index) => {
        return file.type === "image" ? (
          <div
            key={index}
            className="border-4 border-slate-600 relative h-[250px] cursor-pointer overflow-hidden"
          >
            <Image
              src={file.url}
              width={500}
              height={500}
              alt={index.toString()}
              className="absolute top-0 left-0 w-full h-full object-cover hover:scale-150 duration-400"
            />
          </div>
        ) : (
          <div
            key={index}
            className="border-4 border-slate-600 relative h-[250px] cursor-pointer overflow-hidden"
          >
            <video
              src={file.url}
              muted
              autoPlay
              loop
            //   controls
              className="w-full h-full absolute top-0 left-0 object-cover"
            ></video>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
