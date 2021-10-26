import React from "react";
import {Cards} from "../Cards";
import {DetailHeader} from "../DetailHeader";
import {processEditUrlFor} from "../../../routing/urls";
import {DetailGrid} from "./DetailGrid";
import {Container} from "../Styles";

export const ProcessDetail = ({process, onDeleteClick}) => {
  return (
    <Container>
      <DetailHeader
        title={"Sistema"}
        id={process.id}
        editUrl={processEditUrlFor(process.id)}
        onDeleteClick={onDeleteClick}
      />
      <Cards adsorbent={process.adsorbente} adsorbate={process.adsorbato} />

      <DetailGrid process={process} />
    </Container>
  );
};
