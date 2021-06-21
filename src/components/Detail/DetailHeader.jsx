import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {PageHeaderContanier} from "../../common/styles";
import {ButtonsSection} from "./Styles";

export const DetailHeader = ({title, children}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />

      <ButtonsSection>{children}</ButtonsSection>
    </PageHeaderContanier>
  );
};
