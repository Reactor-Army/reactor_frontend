import {ProcessCard} from "./ProcessCard";
import {capitalize} from "../../../common/FormatUtils";
import React from "react";
import {useHistory} from "react-router-dom";
import {processDetailUrlFor} from "../../../routing/urls";

export const ProcessCardWrapper = ({process}) => {
  const history = useHistory();
  const browseToProcessDetail = (processId) => {
    history.push(processDetailUrlFor(processId));
  };
  const {
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
  } = process;
  return (
    <ProcessCard
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
  );
};
