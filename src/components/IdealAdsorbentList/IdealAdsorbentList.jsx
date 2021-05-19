import React from "react";
import Typography from "@material-ui/core/Typography";
import {IdealAdsorbentContainer, MessageContainer} from "./Styles";
import {CircularProgress} from "@material-ui/core";
import {IdealAdsorbentAccordion} from "./IdealAdsorbentAccordion";

export function IdealAdsorbentList({idealAdsorbents, loading}) {
  if (!idealAdsorbents || loading) {
    return <CircularProgress />;
  }

  if (idealAdsorbents.length === 0) {
    return (
      <MessageContainer>
        <Typography>
          No se encontraron adsorbentes para tu búsqueda. Probá con otros
          adsorbatos.
        </Typography>
      </MessageContainer>
    );
  }
  return (
    <IdealAdsorbentContainer>
      {idealAdsorbents.length &&
        idealAdsorbents.map(
          (
            {adsorbente, maxQmax, remueveTodosLosAdsorbatos, procesos},
            index,
          ) => (
            <IdealAdsorbentAccordion
              adsorbent={adsorbente}
              maxQmax={maxQmax}
              removeAllAdsorbates={remueveTodosLosAdsorbatos}
              processes={procesos}
              loading={loading}
              index={index}
              key={index}
            />
          ),
        )}
    </IdealAdsorbentContainer>
  );
}
