import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const Title = styled.div`
  color: ${appColors.primary};
  font-family: ${appFontFamily.card};
  font-size: calc(14px + 1vw);
  text-align: center;
  font-weight: 700;
`;

export const FormWrapper = styled.div`
  padding: 30px 40px;
  min-width: 30vw;

  @media (max-width: 700px) {
    padding: initial;
  }
`;

export const TableContainer = styled.div`
  margin: 20px 0;
`;
