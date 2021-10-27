import React, {useEffect, useState} from "react";
import {DataGrid} from "../../../DataGrid/DataGrid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {getCurves} from "../../../../services/processes";
import {
  ActionsContainer,
  LoaderContainer,
} from "../../../../routing/routes/UsersRoute/UsersRouteStyles";
import {DeleteButton} from "../../../List/common/DeleteButton";
import {ViewChartIcon} from "../../../List/common/ViewButton";
import {parameters} from "./Parameters";
import {formatDate} from "../../../../common/FormatUtils";

export const CurvesTable = ({processId}) => {
  const [curves, setCurves] = useState(null);
  useEffect(async () => {
    const curves = await getCurves(processId);

    setCurves(
      curves.map((curve, index) => [
        curve.modelo.nombreVerbose,
        curve.nombre,
        parameters(curve),
        formatDate(curve.fecha),
        <ActionsContainer key={index}>
          <ViewChartIcon />
          <DeleteButton />
        </ActionsContainer>,
      ]),
    );
  });
  const headerItems = [
    "Tipo de Curva",
    "Nombre",
    "Parámetros",
    "Fecha",
    "Acciones",
  ];
  if (curves === null) {
    return (
      <LoaderContainer>
        <CircularProgress />
      </LoaderContainer>
    );
  }
  return <DataGrid headerItems={headerItems} items={curves} />;
};
