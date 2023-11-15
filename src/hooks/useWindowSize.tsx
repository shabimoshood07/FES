import { useEffect, useState } from "react";
type Window = {
  width: number;
  height: number;
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Window>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cleanup = () => {
      window.removeEventListener("resize", handleResize);
    };

    return cleanup;
  }, []);

  return { windowSize };
};

export default useWindowSize;
