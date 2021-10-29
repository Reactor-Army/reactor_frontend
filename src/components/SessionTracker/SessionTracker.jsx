import React, {useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {useSelector} from "react-redux";
import {logout} from "../../redux/auth";
import {displaySessionExpiredMessage} from "../../utils/displaySessionExpiredMessage";
import {Redirect} from "react-router-dom";
import {getHttpClient} from "../../utils/buildHttpClient";

export const SessionTracker = () => {
  const dispatch = useDispatch();
  const {forceLogout, userData} = useSelector((store) => store.auth);

  const token = localStorage.getItem("token");
  const parseJwt = (token) => {
    if (token) {
      try {
        return JSON.parse(window.atob(token.split(".")[1]));
      } catch (error) {
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const decodedJwt = parseJwt(token);
    // Multiplico por 1000 para hacer la conversion a milisegundos
    if (!decodedJwt || (decodedJwt && decodedJwt.exp * 1000 < Date.now())) {
      dispatch(logout());
      displaySessionExpiredMessage();
    }
  });
  const store = useStore();

  useEffect(() => {
    getHttpClient().injectStore(store);
  }, [store, userData]);

  if (forceLogout) {
    displaySessionExpiredMessage();
    return <Redirect to={"/"} />;
  }

  return null;
};
