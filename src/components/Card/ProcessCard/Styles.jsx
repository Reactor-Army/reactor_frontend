import styled from "styled-components/macro";
import {appFontFamily} from "../../../common/styles";
import {CardContainer} from "../Styles";

export const BodyText = styled.div`
  margin-left: 11px;
  font-size: 16px;
  padding-top: 10px;
  font-family: ${appFontFamily.card};

  @media (max-width: 520px) {
    font-size: 13px;
  }
`;

export const ProcessCardContainer = styled(CardContainer)`
  height: 180px;
  min-width: 330px;
  grid-area: auto;
`;
