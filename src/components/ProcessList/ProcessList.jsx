import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchProcesses} from "../../redux/processesSlice";
import {capitalize} from "../../common/FormatUtils";

import {ProcessCard} from "../../components/ProcessCard/ProcessCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";

export function ProcessList({processes}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcesses());
  }, []);

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
      ;
    </ListContainer>
  );
}
