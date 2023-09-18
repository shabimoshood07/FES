import React from "react";
import HeroText from "./HeroText";
import Image from "next/image";
import HomeCarousel from "./HomeCarousel";

const Hero = () => {
  return (
    <>
      <div className=" bg-slate-500 text-slate-100">
        <HeroText text="Faculty of Enviromental Sciences" />
        <div className="relative h-[calc(70vh-4rem)] md:h-[calc(70vh-4rem)]  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="absolute h-full w-full top-0 left-0 bg-slate-700 opacity-50"></div>
          <HomeCarousel />
        </div>
      </div>

      <div className="pt-2 pb-8 bg-slate-300 px-4">
        <h1 className="text-center text-[25px] md:text-[30px] mb-8 underline underline-offset-4 text-slate-950 font-bold">
          Welcome to the Faculty of Enviromental Sciences
        </h1>

        {/* <div className="md:grid grid-cols-2 border-2 border-red-500"> */}
        <div className="md:inline-flex border-2 border-red-500">


          <div className="w-full flex-1">
            <Image
              src="/Dean FES.jpeg"
              height={500}
              width={500}
              alt="Dean FES"
              className="mx-auto block rounded-lg shadow-lg"
            />
            <p className="w-full text-center mb-3 tracking-tight font-semibold">
              Dean: Prof. Abdullateef I. Bako
            </p>
          </div>


          <p className="text-slate-950 text-justify leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            ipsam? Libero, fugiat nulla pariatur voluptate repudiandae
            perferendis accusamus. Veritatis illo fuga id, inventore ab
            similique quibusdam et libero at culpa, animi quod dolorem voluptate
            vero. Repellat corrupti assumenda aliquam necessitatibus. Illo eum
            voluptates alias fugiat, sapiente voluptatem dignissimos nesciunt
            nulla, corporis laborum dolor reprehenderit aut? Quae necessitatibus
            distinctio a accusamus, ad quia esse perferendis nesciunt! Animi,
            ipsa. Corrupti ipsam voluptas, dolor nesciunt hic quidem? Officiis
            facere, ducimus delectus dolorum nostrum totam ratione, itaque in
            consequatur veritatis minima nisi consectetur at molestias eum illo
            aperiam accusamus id. Vitae odio dicta quam cum sunt eum, velit
            minima sed molestiae delectus accusantium impedit necessitatibus
            asperiores repellat culpa officia possimus. Laboriosam qui voluptas
            eos odio saepe quos, nostrum fuga aut placeat vero officiis
            repellendus ullam asperiores dolorum, nisi rerum veritatis iste sit,
            accusamus rem veniam beatae. Laboriosam quae deserunt repellendus?
            Enim explicabo ipsam vero repudiandae beatae delectus libero maiores
            earum alias ex adipisci, numquam, consequatur minima dicta fugit
            eius laborum cupiditate quibusdam ipsa magnam veniam rem eligendi.
            Deleniti nobis est quibusdam? Eligendi quas non totam, voluptas
            pariatur facilis laboriosam. Tempore nihil repudiandae quae culpa
            veritatis quisquam itaque numquam excepturi debitis, magni at in ad.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
