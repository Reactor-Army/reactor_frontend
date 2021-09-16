import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bodyBackground || appColors.white};
  box-shadow: 0 3px 8px 0
    rgb(0 0 0 / ${(props) => (props.selected ? "80%" : "20%")});
  overflow: hidden;
  border-radius: 4px;
  position: relative;

  &:hover {
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  }
`;
