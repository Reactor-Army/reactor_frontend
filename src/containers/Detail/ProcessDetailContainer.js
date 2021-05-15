import {Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../redux/processSlice";

export const ProcessDetailContainer = ({processId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcess(processId));
  }, []);

  const process = useSelector((store) => store.process.process);
  return (
    <div>
      <Typography>Detalle de proceso ID {processId}!</Typography>
      {process ? <Typography>{process.id}</Typography> : null}
    </div>
  );
};
