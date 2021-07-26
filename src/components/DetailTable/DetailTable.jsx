import React from "react";
import {
  Title,
  Row,
  Label,
  Value,
  RowContainer,
  TableWrapper,
} from "./DetailTableStyles";

export const DetailTable = ({title = "", children}) => {
  return (
    <TableWrapper>
      <Title>{title}</Title>
      <RowContainer>{children}</RowContainer>
    </TableWrapper>
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
