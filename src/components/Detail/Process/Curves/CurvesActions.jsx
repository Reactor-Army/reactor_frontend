import {ActionsContainer} from "../../../../routing/routes/UsersRoute/UsersRouteStyles";
import {ViewChartIcon} from "../../../List/common/ViewButton";
import {DeleteButton} from "../../../List/common/DeleteButton";
import React, {useState} from "react";
import {DeleteCurveModal} from "../../../Modals/DeleteCurveModal";

export const CurvesActions = ({curveData}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const close = () => setOpenDeleteModal(false);
  return (
    <>
      <ActionsContainer>
        <ViewChartIcon />
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
