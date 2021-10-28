import {ActionsContainer} from "../../../../routing/routes/UsersRoute/UsersRouteStyles";
import {ViewChartIcon} from "../../../List/common/ViewButton";
import {DeleteButton} from "../../../List/common/DeleteButton";
import React, {useState} from "react";
import {DeleteCurveModal} from "../../../Modals/DeleteCurveModal";
import {useHistory} from "react-router-dom";
import {modelResultsUrlFor} from "../../../../routing/urls";

export const CurvesActions = ({curveData}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const close = () => setOpenDeleteModal(false);
  const history = useHistory();

  const view = () => {
    history.push(modelResultsUrlFor(curveData.id));
  };

  return (
    <>
      <ActionsContainer>
        <ViewChartIcon onClick={view} />
        <DeleteButton onClick={() => setOpenDeleteModal(true)} />
      </ActionsContainer>
      <DeleteCurveModal
        open={openDeleteModal}
        onClose={close}
        curveData={curveData}
      />
    </>
  );
};
