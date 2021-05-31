import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const CardHeader = styled.div`
  display: flex;
  height: 25%;
  box-shadow: 0px 0px 5px #9ea3a1;
  font-size: 24px;
  font-family: ${appFontFamily.card};
  padding-bottom: 4px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.theme.backgroundColor || appColors.white};
`;

export const Section = styled.div`
  display: flex;

  @media (max-width: 550px) {
    flex-direction: column;
  }

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const CardBody = styled.div`
  margin-bottom: 15px;
`;

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  padding: 0px 0px 10px 15px;
  @media (max-width: 1370px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 410px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

export const FooterItem = styled.div`
  font-size: 18px;
  padding-right: 15px;
  font-family: ${appFontFamily.card};
  white-space: nowrap;
  overflow: hidden;
`;

export const BodyText = styled.div`
  display: flex;
  margin-left: 15px;
  font-size: 18px;
  font-family: ${appFontFamily.card};
  @media (max-width: 350px) {
    flex-direction: column;
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 10px;
`;

export const FieldLabel = styled.strong`
  font-size: 18px;
`;

export const FieldValue = styled.div`
  font-size: 18px;
  padding-left: 8px;
  @media (max-width: 350px) {
    padding: 0;
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
