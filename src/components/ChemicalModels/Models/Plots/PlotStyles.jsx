import styled from "styled-components/macro";
import {
  appColors,
  appFontColors,
  appFontFamily,
} from "../../../../common/styles";

export const ErrorMessageContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${appColors.black};
`;

export const ErrorMessage = styled.div`
  font-family: ${appFontFamily.primary};
  color: ${appFontColors.warning};
  text-align: center;
  font-size: 20px;
`;
