import {useEffect} from "react";
import {useSelector} from "react-redux";
import {buildHttpClient} from "../utils/buildHttpClient";

export const TokenSetter = () => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token !== null) {
      buildHttpClient(token);
    }
  }, [token]);
  return null;
};
