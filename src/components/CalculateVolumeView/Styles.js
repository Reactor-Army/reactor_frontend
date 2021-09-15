import styled from "styled-components";
import {appFontColors, appFontFamily} from "../../common/styles";

export const CalculateVolumeFormContainer = styled.div`
  margin-top: 20px;
`;

export const ProcessPickerContainer = styled.div`
  margin-bottom: 20px;
`;

export const InvalidFormMessage = styled.div`
  margin-top: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.warning};
  font-size: 16px;
`;
