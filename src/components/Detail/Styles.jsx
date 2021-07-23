import styled from "styled-components/macro";
import {StyledButton} from "../Button/ButtonStyles";

export const LabelContainer = styled.div`
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const LongTextContainer = styled.div`
  display: flex;
  white-space: pre-wrap;
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
