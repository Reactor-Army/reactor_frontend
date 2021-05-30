import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {SectionHeader} from "./SectionHeader";
import {capitalizeFirstLetter} from "../../utils/capitalize";

export const AdsorbentDetail = ({adsorbent}) => {
  return (
    <>
      <PageTitle title={capitalizeFirstLetter(adsorbent.nombre)} />
      <SectionHeader>Características</SectionHeader>
    </>
  );
};
