import React from "react";
import {
  Title,
  Row,
  Label,
  Value,
  RowContainer,
  TableWrapper,
  Container,
  TableTitleContainer,
} from "./DetailTableStyles";

export const DetailTable = ({title = "", children, icon}) => {
  return (
    <Container>
      <TableTitleContainer>
        <Title>{title}</Title>
        {icon}
      </TableTitleContainer>
      <TableWrapper>
        <RowContainer>{children}</RowContainer>
      </TableWrapper>
    </Container>
  );
};

export const DetailTableRow = ({label, value, units = ""}) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Value>{value ? `${value} ${units}` : "-"}</Value>
    </Row>
  );
};

export const DetailTableFormulaRow = ({label, value}) => {
  return (
    <Row>
      <Label>{label}</Label>
      <Value>{value ? value : "-"}</Value>
    </Row>
  );
};
