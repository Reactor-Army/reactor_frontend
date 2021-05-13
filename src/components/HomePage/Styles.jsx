import styled from "styled-components/macro";
import {appFontColors, appFontFamily} from "../../common/styles";

export const HomeTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.white};
  font-weight: bold;
  font-size: 40px;
  justify-content: center;
  margin: 5px 0 10px 0;
`;
