import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";
import {SectionHeaderContainer} from "../Detail/Styles";
import {Title} from "../ChemicalModels/Models/ModelsStyles";

export const CalculateVolumeFormContainer = styled.div`
  width: 400px;
  margin-bottom: 10px;
  @media (max-width: 412px) {
    width: 250px;
  }
`;

export const ProcessPickerContainer = styled.div`
  margin-bottom: 20px;
`;

export const InvalidFormMessage = styled.div`
  margin-top: 10px;
  font-family: ${appFontFamily.lato};
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
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-evenly;
`;

export const VolumeResultsTitle = styled(Title)`
  font-size: 36px;
`;

export const VolumeResultsText = styled.div`
  font-size: 24px;
  font-family: ${appFontFamily.lato};
`;

export const SelectedProcessTitle = styled(SectionHeaderContainer)`
  margin-top: 0;
  color: ${appColors.lightBlue};
  font-size: calc(14px + 0.4vw);
  font-weight: bold;
`;

export const VolumeResultsContainer = styled(CalculateVolumeFormContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  justify-content: space-between;
`;
