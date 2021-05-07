import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {capitalize} from "../../common/FormatUtils";

import {AdsorbateCard} from "../../components/Card/AdsorbateCard/AdsorbateCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";

export function AdsorbateList({adsorbates}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  const formatAdsorbateName = (name, nameIUPAC) => {
    return nameIUPAC ? `${nameIUPAC} (${name}) ` : name;
  };

  if (!adsorbates.length) {
    return <CircularProgress />;
  }
  if (adsorbates.length > 0) {
    return (
      <ListContainer>
        {adsorbates.map(
          (
            {nombreIon, nombreIUPAC, cargaIon, radioIonico, limiteVertido},
            index,
          ) => (
            <AdsorbateCard
              headerBackgroundColor={appColors.adsorbateCardHeader}
              bodyBackgroundColor={appColors.adsorbentCardBody}
              header={capitalize(formatAdsorbateName(nombreIon, nombreIUPAC))}
              ionCharge={cargaIon}
              ionRadius={radioIonico}
              dischargeLimit={limiteVertido}
              key={index}
            />
          ),
        )}
      </ListContainer>
    );
  }
}
