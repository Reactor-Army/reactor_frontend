import React, {useState, useEffect} from "react";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {logout} from "../../redux/auth";
import {displaySessionExpiredMessage} from "../../utils/displaySessionExpiredMessage";
import {errorCodes} from "../../utils/errorStatusCodes";
import {CrudSnackbar} from "../CrudSnackbar/CrudSnackbar";

export const StoreSnackbar = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.users);
  const user = useSelector((store) => store.user.user);
  const sessionTrackDependencies = [users, user];
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    sessionTrackDependencies.some((dependency) => {
      if (dependency && errorCodes.includes(dependency.status)) {
        setSeverity("info");
        dispatch(logout());
        displaySessionExpiredMessage();
      }
    });
  }, sessionTrackDependencies);

  return <CrudSnackbar severity={severity} />;
};
