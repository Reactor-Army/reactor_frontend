import React from "react";
import {
  Title,
  Row,
  Label,
  Value,
  RowContainer,
  TableWrapper,
  Container,
} from "./DetailTableStyles";

export const DetailTable = ({title = "", children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableWrapper>
        <RowContainer>{children}</RowContainer>
      </TableWrapper>
    </Container>
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
