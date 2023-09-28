"use client";

import { useState } from "react";

const LongTextReadMore = ({
  longText,
  visiblecharacter,
}: {
  longText: string;
  visiblecharacter: number;
}) => {
  const [words, setWords] = useState(visiblecharacter);

  return (
    <>
      {longText.slice(0, words)}
      <button
        className="text-slate-500"
        onClick={() =>
          words === 700 ? setWords(longText.length) : setWords(visiblecharacter)
        }
      >
        {words === visiblecharacter ? "... Read more" : "...Collapse"}
      </button>
    </>
  );
};

export default LongTextReadMore;
