import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {PageHeaderContanier} from "../../common/styles";
import {ButtonsSection} from "./Styles";

export const DetailHeader = ({title, buttons}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />

      <ButtonsSection>{buttons}</ButtonsSection>
    </PageHeaderContanier>
  );
};
