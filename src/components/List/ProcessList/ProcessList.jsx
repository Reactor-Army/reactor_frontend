import React from "react";

import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {ListContainer} from "../ListStyles";
import {ProcessCardWrapper} from "../../Card/ProcessCard/ProcessCardWrapper";

export function ProcessList({loading, processes}) {
  if (loading || !processes) {
    return <CircularProgress />;
  }

  if (processes.length === 0) {
    return (
      <Typography>
        No se encontraron sistemas para tu búsqueda. Probá con otros parámetros.
      </Typography>
    );
  }
  return (
    <ListContainer>
      {processes.map((process) => (
        <ProcessCardWrapper process={process} key={process.id} />
      ))}
    </ListContainer>
  );
}
