import styled from "styled-components/macro";
import {appColors, appFontColors, appFontFamily} from "../../common/styles";
import {Title} from "../ChemicalModels/Models/ModelsStyles";
import {BigButton} from "../Button/ButtonStyles";

const contentPadding = "15px";
const widthStyles = `
min-width: min(300px, 80vw);
max-width: 800px;
`;
export const CalculateVolumeFormContainer = styled.div`
  margin-bottom: 10px;
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
  font-family: ${appFontFamily.lato};
  color: ${appFontColors.warning};
  font-size: 16px;
  padding: 0 ${contentPadding};
`;

export const SelectedProcessContainer = styled.div`
  flex: 2;
  ${widthStyles};
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
  gap: 50px;
  flex: 1;

  @media (max-width: 500px) {
    gap: initial;
  }
`;

export const VolumeResultsTitle = styled(Title)`
  font-size: 36px;
`;

export const VolumeResultsText = styled.div`
  font-size: 24px;
  font-family: ${appFontFamily.lato};
`;

export const VolumeResultsContainer = styled(CalculateVolumeFormContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  ${widthStyles};
`;

export const Button = styled(BigButton)`
  align-self: center;
`;

export const VolumeResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-width: 320px;
  max-width: 500px;
  background: ${appColors.white};
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  flex: 1;

  @media (max-width: 500px) {
    min-width: initial;
    align-items: center;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-wrap: wrap-reverse;
  gap: 50px;

  @media (max-width: 768px) {
    gap: initial;
  }
`;
