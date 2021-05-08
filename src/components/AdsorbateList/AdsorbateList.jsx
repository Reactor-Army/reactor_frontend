import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbates} from "../../redux/adsorbatesSlice";
import {capitalize} from "../../common/FormatUtils";

import {AdsorbateCard} from "../../components/Card/AdsorbateCard/AdsorbateCard";
import {appColors} from "../../common/styles";
import {ListContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export function AdsorbateList({adsorbates}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsorbates());
  }, []);

  const formatAdsorbateName = (name, nameIUPAC) => {
    return nameIUPAC ? `${nameIUPAC} (${name}) ` : name;
  };

  if (!adsorbates) {
    return <CircularProgress />;
  }
  if (adsorbates.length === 0) {
    return (
      <Typography>
        No se encontraron adsorbatos para tu búsqueda. Probá con otros
        parámetros.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {adsorbates.map(
        ({
          nombreIon,
          nombreIUPAC,
          cargaIon,
          radioIonico,
          limiteVertido,
          id,
        }) => (
          <AdsorbateCard
            headerBackgroundColor={appColors.adsorbateCardHeader}
            bodyBackgroundColor={appColors.adsorbentCardBody}
            header={capitalize(formatAdsorbateName(nombreIon, nombreIUPAC))}
            ionCharge={cargaIon}
            ionRadius={radioIonico}
            dischargeLimit={limiteVertido}
            id={id}
            key={id}
          />
        ),
      )}
    </ListContainer>
  );
}
