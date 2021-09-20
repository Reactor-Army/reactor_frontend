import {ProcessCard} from "./ProcessCard";
import {capitalize} from "../../../common/FormatUtils";
import React from "react";
import {useHistory} from "react-router-dom";
import {processDetailUrlFor} from "../../../routing/urls";

export const ProcessCardWrapper = ({process, onProcessClick, selected}) => {
  const history = useHistory();
  const {
    adsorbato,
    adsorbente,
    id,
    qmax,
    tiempoEquilibrio,
    temperatura,
    phinicial,
  } = process;
  const onClick = () => {
    onProcessClick ? onProcessClick(id) : history.push(processDetailUrlFor(id));
  };

  return (
    <ProcessCard
      adsorbateName={capitalize(adsorbato.nombreIon)}
      adsorbentName={adsorbente.nombre}
      qMax={qmax}
      equilibriumTime={tiempoEquilibrio}
      temperature={temperatura}
      initialPH={phinicial}
      key={id}
      onClick={onClick}
      selected={selected}
    />
  );
};
