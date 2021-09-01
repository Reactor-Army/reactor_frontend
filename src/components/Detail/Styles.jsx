import styled from "styled-components/macro";
import {StyledButton} from "../Button/ButtonStyles";
import {appColors, appFontFamily} from "../../common/styles";

export const Tag = styled.div`
  font-weight: bold;
  font-size: 1rem;
  font-family: ${appFontFamily.primary};
`;

export const Value = styled.div`
  font-size: 1rem;
  font-family: ${appFontFamily.primary};
`;

export const LabelContainer = styled.div`
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SectionHeaderContainer = styled.div`
  margin-top: 20px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    position: fixed;
    bottom: 2%;
    width: 80vw;
    z-index: 1;
  }
`;

export const EffectiveVolumeButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const EffectiveVolumeStyledButton = styled(StyledButton)`
  height: 60px;
  width: 280px;

  &:disabled {
    background: ${appColors.gray};
    cursor: arrow;
  }
`;

export const DetailTableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 25px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (max-width: 500px) {
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 415px) {
    height: 78vh;
  }

  @media (max-width: 375px) {
    height: 72vh;
  }
`;
