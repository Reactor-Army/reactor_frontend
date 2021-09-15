import React from "react";

import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {InnerProcessList} from "./InnerProcessList";

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
  return <InnerProcessList processes={processes} />;
}
