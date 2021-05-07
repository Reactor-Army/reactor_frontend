import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";

import {AdsorbateCard} from "../../components/AdsorbateCard/AdsorbateCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";

export function AdsorbateList({adsorbates}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  const formatAadsorbateName = (name, nameIUPAC) => {
    if (nameIUPAC) return `${nameIUPAC} (${name})`;
    else return name;
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <ListContainer>
      {adsorbates.length &&
        adsorbates.map(
          (
            {nombreIon, nombreIUPAC, cargaIon, radioIonico, limiteVertido},
            index,
          ) => (
            <AdsorbateCard
              headerBackgroundColor={appColors.adsorbateCardHeader}
              bodyBackgroundColor={appColors.adsorbentCardBody}
              header={capitalize(formatAadsorbateName(nombreIon, nombreIUPAC))}
              ionCharge={cargaIon}
              ionRadius={radioIonico}
              dischargeLimit={limiteVertido}
              key={index}
            />
          ),
        )}
      ;
    </ListContainer>
  );
}
