import React from "react";
import {PageTitle} from "../../common/PageTitle";
import {PageHeaderContanier} from "../../common/styles";
import {ButtonsSection} from "./Styles";
import {HeaderButtons} from "./HeaderButtons";

export const DetailHeader = ({title, editUrl, onDeleteClick}) => {
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />

      <ButtonsSection>
        <HeaderButtons editUrl={editUrl} onDeleteClick={onDeleteClick} />
      </ButtonsSection>
    </PageHeaderContanier>
  );
};
