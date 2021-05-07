import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";
import {CardContainer} from "../Card/Styles";

export const CardHeader = styled.div`
  display: flex;
  height: 25%;
  box-shadow: 0px 0px 5px #9ea3a1;
  font-size: 24px;
  font-family: ${appFontFamily.card};
  padding-bottom: 4px;
  background-color: ${(props) =>
    props.theme.backgroundColor || appColors.white};
`;

export const CardBody = styled.div`
  height: 45%;
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  height: 30%;
  margin-left: 15px;
`;

export const HeaderText = styled.div`
  font-weight: bold;
  font-family: ${appFontFamily.card};
  margin-left: 10px;
  padding: 0 65px 0 0;
  font-size: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;

export const BodyText = styled.div`
  margin-left: 11px;
  font-size: 16px;
  padding-top: 10px;
  font-family: ${appFontFamily.card};
`;

export const FooterItem = styled.div`
  font-size: 12px;
  padding-right: 15px;
  font-family: ${appFontFamily.card};
`;

export const CardProcess = styled(CardContainer)`
  width: 500px;
  height: 180px;
`;

export const DataLabel = styled.strong``;
