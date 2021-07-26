import React from "react";
import {Title, Row, Label, Value, RowContainer} from "./DetailTableStyles";

export const DetailTable = ({title = "", children}) => {
  return (
    <>
      <Title>{title}</Title>
      <RowContainer>{children}</RowContainer>
    </>
  );
};

export const DetailTableRow = ({label, value}) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Row>
  );
};
