import React, {useState, useEffect} from "react";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {logout} from "../../redux/auth";
import {displaySessionExpiredMessage} from "../../utils/displaySessionExpiredMessage";
import {errorCodes} from "../../utils/errorStatusCodes";
import {CrudSnackbar} from "../CrudSnackbar/CrudSnackbar";

export const StoreSnackbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    if (user && errorCodes.includes(user.status)) {
      setSeverity("info");
      dispatch(logout());
      displaySessionExpiredMessage();
    }
  }, [user]);

  return <CrudSnackbar severity={severity} />;
};
