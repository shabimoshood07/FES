"use client";
// import { MoveUp } from "lucide-react";
// import Link from "next/link";

// const GotoTopBtn = () => {
//   return (
//     <Link href="#top">
//       <button className="border-2 border-slate-950 rounded-lg p-2 fixed bottom-0 right-0 mx-4 mb-2 ">
//         <MoveUp />
//       </button>
//     </Link>
//   );
// };

// export default GotoTopBtn;

import { MoveUp } from "lucide-react";
import { useState, useEffect } from "react";

const GotoTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="text-[12px] opacity-20 hover:opacity-100 border-2 border-slate-950  text-red-800 rounded-lg p-1 fixed bottom-0 right-0 mx-4 mb-2"
          onClick={scrollToTop}
        >
          <MoveUp className="font-bold h-3" />Top
        </button>
      )}
    </>
  );
};

export default GotoTopBtn;
