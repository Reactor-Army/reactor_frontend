import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const ModalContainer = styled.div`
  max-width: 600px;
  background-color: ${appColors.white};
  border: 1px solid ${appColors.gray};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 32px 24px;
  border-radius: 8px;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
`;
