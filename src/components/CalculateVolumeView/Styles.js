import styled from "styled-components";
import {appFontColors, appFontFamily} from "../../common/styles";
import {SectionHeader} from "../Detail/SectionHeader";

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
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const VolumeFormContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
`;

export const VolumeResultsText = styled.div`
  font-size: 24px;
  font-family: ${appFontFamily.primary};
`;

export const SelectedProcessTitle = styled(SectionHeader)`
  margin-top: 0;
`;

export const VolumeResultsContainer = styled(CalculateVolumeFormContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  justify-content: space-between;
`;
