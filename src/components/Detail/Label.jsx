import React from "react";
import {LabelContainer, Value, Tag} from "./Styles";

export const Label = ({label, value}) => {
  return (
    <LabelContainer>
      <Tag>{label}</Tag>
      <Value>: {value || "-"}</Value>
    </LabelContainer>
  );
};
