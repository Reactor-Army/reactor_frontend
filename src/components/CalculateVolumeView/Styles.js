import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";
import {SectionHeaderContainer} from "../Detail/Styles";
import {Title} from "../ChemicalModels/Models/ModelsStyles";
import {
  DataFrame,
  Title as DataFrameTitle,
} from "../ChemicalModels/Models/ModelsStyles";
import {BigButton} from "../Button/ButtonStyles";

const contentPadding = "15px";
export const CalculateVolumeFormContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  @media (max-width: 412px) {
    width: 250px;
  }
`;

export const SectionHeader = styled.div`
  font-family: ${appFontFamily.card};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 20px 0;
  padding: 0 ${contentPadding};
`;

export const ProcessPickerContainer = styled.div`
  margin-bottom: 20px;
`;

export const InvalidFormMessage = styled.div`
  margin-top: 10px;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.warning};
  font-size: 16px;
  padding: 0 ${contentPadding};
`;

export const SelectedProcessContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const VolumeFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 0 ${contentPadding};
  gap: 30px;

  @media (max-width: 500px) {
    gap: initial;
  }
`;

export const VolumeResultsTitle = styled(Title)`
  font-size: 36px;
`;

export const VolumeResultsText = styled.div`
  font-size: 24px;
  font-family: ${appFontFamily.primary};
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
  padding: ${contentPadding};
  gap: 50px;
`;

export const StyledDataFrame = styled(DataFrame)`
  margin: 0 ${contentPadding};
  width: calc(100% - 2 * ${contentPadding});

  @media (max-width: 500px) {
    width: 100%;
    margin: initial;
  }
`;

export const StyledTitle = styled(DataFrameTitle)`
  padding: 0 ${contentPadding};
  font-family: ${appFontFamily.card};
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled(BigButton)`
  align-self: center;

  @media (max-width: 500px) {
    align-self: flex-start;
  }
`;

export const VolumeResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
