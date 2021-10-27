import {ActionsContainer} from "../../../../routing/routes/UsersRoute/UsersRouteStyles";
import {ViewChartIcon} from "../../../List/common/ViewButton";
import {DeleteButton} from "../../../List/common/DeleteButton";
import React from "react";

export const CurvesActions = () => {
  return (
    <ActionsContainer>
      <ViewChartIcon />
      <DeleteButton />
    </ActionsContainer>
  );
};
