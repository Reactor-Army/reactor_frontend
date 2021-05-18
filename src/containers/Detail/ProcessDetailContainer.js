import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../redux/processSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ProcessDetail} from "../../components/Detail/ProcessDetail";

export const ProcessDetailContainer = ({processId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcess(processId));
  }, []);

  const process = useSelector((store) => store.process.process);
  if (process === null) {
    return <CircularProgress />;
  }
  return <ProcessDetail process={process} />;
};
