import styled from "styled-components/macro";
import {appFontFamily} from "../../../common/styles";
import {CardContainer} from "../Styles";

export const BodyText = styled.div`
  margin-left: 11px;
  font-size: 16px;
  padding-top: 10px;
  font-family: ${appFontFamily.card};
`;

export const ProcessCardContainer = styled(CardContainer)`
  width: 500px;
  height: 180px;
`;
