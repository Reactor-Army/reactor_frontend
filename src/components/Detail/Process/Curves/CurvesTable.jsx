import React, {useEffect, useState} from "react";
import {DataGrid} from "../../../DataGrid/DataGrid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {CircularProgressContainer} from "./Styles";

export const CurvesTable = () => {
  const [curves, setCurves] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCurves([
        ["Ejemplo", "para ver", "como quedan", "la tabla", "y el contenido"],
      ]);
    }, 1000);
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
      <CircularProgressContainer>
        <CircularProgress />
      </CircularProgressContainer>
    );
  }
  return <DataGrid headerItems={headerItems} items={curves} />;
};
