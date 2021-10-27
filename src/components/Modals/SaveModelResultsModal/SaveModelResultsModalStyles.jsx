import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";

export const Title = styled.div`
  color: ${appColors.primary};
  font-family: ${appFontFamily.card};
  font-size: calc(14px + 1vw);
  text-align: center;
  font-weight: 700;
  padding: 15px 0;
`;

export const FormWrapper = styled.div`
  padding: 30px 40px;

  @media (max-width: 700px) {
    padding: initial;
  }
`;
