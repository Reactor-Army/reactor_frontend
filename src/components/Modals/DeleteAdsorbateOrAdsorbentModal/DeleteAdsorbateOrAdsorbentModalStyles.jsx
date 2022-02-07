import styled from "styled-components/macro";
import {appFontFamily, appFontColors} from "../../../common/styles";

export const Warning = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${appFontColors.warning};
`;
