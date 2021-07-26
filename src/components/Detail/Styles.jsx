import styled from "styled-components/macro";
import {StyledButton} from "../Button/ButtonStyles";

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
`;

export const EffectiveVolumeButtonContainer = styled.div`
  margin-top: 10px;
`;

export const EffectiveVolumeStyledButton = styled(StyledButton)`
  height: 60px;
  width: 150px;
`;

export const DetailTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 70px;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
