import {Paragraph} from "../../HomePage/Styles";
import React from "react";

export const ThomasResults = ({kth, q0}) => {
  return (
    <>
      <Paragraph>Constante de Thomas (Kth): {kth}</Paragraph>
      <Paragraph>Concentración máxima soluto (q0): {q0}</Paragraph>
    </>
  );
};
