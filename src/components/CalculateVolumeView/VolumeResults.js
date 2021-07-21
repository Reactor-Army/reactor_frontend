import {SectionHeader} from "../Detail/SectionHeader";
import {Label} from "../Detail/Label";
import React from "react";

export const VolumeResults = ({volume}) => {
  return (
    <>
      <SectionHeader>Resultados</SectionHeader>
      <Label label={"Volumen efectivo"} value={volume} />
    </>
  );
};
