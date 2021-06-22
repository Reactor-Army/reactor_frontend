import {useEffect} from "react";

export const useAsync = (asyncFunction, values) => {
  useEffect(() => {
    const callback = async () => {
      await asyncFunction();
    };
    callback();
  }, values);
};
