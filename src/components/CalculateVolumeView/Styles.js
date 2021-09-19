import styled from "styled-components";
import {appFontColors, appFontFamily} from "../../common/styles";

export const CalculateVolumeFormContainer = styled.div`
  margin-top: 20px;
  width: 400px;
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

export const SelectedProcessContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  flex-wrap: wrap;
`;

export const VolumeFormContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
`;
