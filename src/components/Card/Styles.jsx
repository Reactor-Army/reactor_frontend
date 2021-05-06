import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background || appColors.white};
  width: 500px;
  height: 130px;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 20%);
  padding: 4px 0 0 0;
  overflow: hidden;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  }
`;