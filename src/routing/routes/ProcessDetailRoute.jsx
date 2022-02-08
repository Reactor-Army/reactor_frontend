import React, {useEffect, useState} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ProcessDetail} from "../../components/Detail/Process/ProcessDetail";
import {DeleteProcessModal} from "../../components/Modals/DeleteProcessModal";
import {Redirect} from "react-router-dom";
import {URLS} from "../../routing/urls";
import {errorCodes} from "../../utils/errorStatusCodes";
import {getProcess} from "../../services/processes";
import {useParams} from "react-router-dom";

export const ProcessDetailRoute = () => {
  let {id} = useParams();

  const [process, setProcess] = useState(null);
  useEffect(async () => {
    const response = await getProcess(id);
    setProcess(response);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const onDeleteClick = () => {
    setShowModal(true);
  };

  if (process === null) {
    return <CircularProgress />;
  }
  if (process && errorCodes.includes(process.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  } else {
    return (
      <>
        <ProcessDetail process={process} onDeleteClick={onDeleteClick} />
        <DeleteProcessModal
          processId={id}
          open={showModal}
          onClose={() => setShowModal(false)}
          error={false}
        />
      </>
    );
  }
};
