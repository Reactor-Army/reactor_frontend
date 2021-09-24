import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import * as snackbar from "../../redux/snackbar";

export const CrudSnackbar = () => {
  const {open, message} = useSelector((state) => state.crudSnackbar);
  const dispatch = useDispatch();
  const handleSnackClose = () => {
    dispatch(snackbar.close());
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackClose}>
      <Alert
        severity="success"
        sx={{width: "100%", color: "success.main"}}
        onClose={handleSnackClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};
