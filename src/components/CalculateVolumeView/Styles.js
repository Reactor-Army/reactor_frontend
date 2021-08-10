import styled from "styled-components";
import {appFontColors, appFontFamily} from "../../common/styles";

export const CalculateVolumeFormContainer = styled.div`
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  width: 600px;
  margin-top: 15px;
  margin-bottom: 20px;
  @media (max-width: 1110px) {
    width: 100%;
  } ;
`;

export const InvalidFormMessage = styled.div`
  margin-top: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.warning};
  font-size: 16px;
`;
