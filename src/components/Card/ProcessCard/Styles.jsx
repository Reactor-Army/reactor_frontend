import styled from "styled-components/macro";
import {appFontFamily} from "../../../common/styles";

export const BodyText = styled.div`
  margin-left: 11px;
  font-size: 16px;
  padding-top: 10px;
  font-family: ${appFontFamily.card};

  @media (max-width: 520px) {
    font-size: 13px;
  }
`;
