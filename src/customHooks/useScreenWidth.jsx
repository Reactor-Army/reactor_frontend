import {useState, useEffect} from "react";

const getWidth = () => {
  return window.innerWidth;
};

export const useScreenWidth = (referenceWidth) => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width < referenceWidth;
};
