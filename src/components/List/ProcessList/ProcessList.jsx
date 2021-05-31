import React from "react";

import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory} from "react-router-dom";
import {capitalize} from "../../../common/FormatUtils";
import {processDetailUrlFor} from "../../../routing/urls";
import {appColors} from "../../../common/styles";
import {ProcessCard} from "../../Card/ProcessCard/ProcessCard";
import {ListContainer} from "../AdsorbentList/Styles";

export function ProcessList({loading, processes}) {
  const history = useHistory();
  const browseToProcessDetail = (processId) => {
    history.push(processDetailUrlFor(processId));
  };

  if (loading || !processes) {
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
        ({
          adsorbato,
          adsorbente,
          id,
          qmax,
          tiempoEquilibrio,
          temperatura,
          phinicial,
          complejacion,
          intercambioIonico,
          reaccionQuimica,
        }) => (
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
            key={id}
            browseToProcessDetail={() => browseToProcessDetail(id)}
          />
        ),
      )}
    </ListContainer>
  );
}
