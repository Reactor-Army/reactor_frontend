import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchProcesses} from "../../redux/processesSlice";
import {capitalize} from "../../common/FormatUtils";

import {ProcessCard} from "../Card/ProcessCard/ProcessCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export function ProcessList({loading, processes}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcesses());
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (processes.length === 0) {
    return (
      <Typography>
        No se encontraron procesos para tu búsqueda. Probá con otros parámetros.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {processes.map(
        (
          {
            adsorbato,
            adsorbente,
            qmax,
            tiempoEquilibrio,
            temperatura,
            phinicial,
            complejacion,
            intercambioIonico,
            reaccionQuimica,
          },
          index,
        ) => (
          <ProcessCard
            headerBackgroundColor={appColors.processCardHeader}
            bodyBackgroundColor={appColors.adsorbentCardBody}
            adsorbateName={capitalize(adsorbato.nombreIon)}
            adsorbentName={adsorbente.nombre}
            qMax={qmax}
            equilibriumTime={tiempoEquilibrio}
            temperature={temperatura}
            initialPH={phinicial}
            complexation={complejacion}
            ionicInterchange={intercambioIonico}
            chemicalReaction={reaccionQuimica}
            key={index}
          />
        ),
      )}
    </ListContainer>
  );
}
