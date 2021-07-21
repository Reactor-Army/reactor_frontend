import React, {useEffect} from "react";
import {CalculateVolumeView} from "../components/CalculateVolumeView/CalculateVolumeView";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../redux/processSlice";
import CircularProgress from "@material-ui/core/CircularProgress";

export const CalculateVolumeViewContainer = ({id}) => {
  const dispatch = useDispatch();
  const process = useSelector((store) => store.process.process);
  useEffect(() => {
    if (!process) {
      dispatch(fetchProcess(id));
    }
  }, []);

  return (
    <>
      {process === null ? (
        <CircularProgress />
      ) : (
        <CalculateVolumeView
          reactionOrder={process.ordenReaccion}
          constanteCinetica={process.constanteCinetica}
        />
      )}
    </>
  );
};
