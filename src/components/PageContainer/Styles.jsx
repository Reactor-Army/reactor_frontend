import styled from "styled-components/macro";
import {appColors} from "../../common/styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: ${appColors.pageBackground};
  background-size: cover;
`;
