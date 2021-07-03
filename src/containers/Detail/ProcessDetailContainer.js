import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../redux/processSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ProcessDetail} from "../../components/Detail/ProcessDetail";
import {DeleteProcessModal} from "../../components/Modals/DeleteProcessModal";

export const ProcessDetailContainer = ({processId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcess(processId));
  }, []);

  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  const process = useSelector((store) => store.process.process);
  if (process === null) {
    return <CircularProgress />;
  }

  return (
    <>
      <ProcessDetail process={process} onDeleteClick={onDeleteClick} />
      <DeleteProcessModal
        processId={processId}
        open={showModal}
        onClose={() => setShowModal(false)}
        error={false}
      />
    </>
  );
};
