import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchProcesses} from "../../redux/processesSlice";

import {ProcessCard} from "../../components/ProcessCard/ProcessCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";

export function ProcessList({processes}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcesses());
  }, []);

  const formatProcessName = (adsorbateName, adsorbentName) => {
    return `${adsorbateName} / ${adsorbentName}`;
  };

  const convertToString = (bool) => {
    return bool ? "Si" : "No";
  };

  return (
    <ListContainer>
      {processes.length &&
        processes.map(
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
              header={formatProcessName(adsorbato.nombreIon, adsorbente.nombre)}
              qMax={qmax}
              equilibriumTime={tiempoEquilibrio}
              temperature={temperatura}
              initialPH={phinicial}
              complexation={convertToString(complejacion)}
              ionicInterchange={convertToString(intercambioIonico)}
              chemicalReaction={convertToString(reaccionQuimica)}
              key={index}
            />
          ),
        )}
      ;
    </ListContainer>
  );
}
