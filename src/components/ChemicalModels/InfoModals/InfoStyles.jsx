import styled from "styled-components/macro";
import {appFontFamily} from "../../../common/styles";

export const Info = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: calc(11px + 0.5vw);
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const InfoTitle = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: calc(12px + 1vw);
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Ecuation = styled.img`
  margin: 0 auto;
  display: block;
  width: calc(300px + 0.5vw);
  height: calc(60px + 0.5vw);
`;

export const UnitContainer = styled.div`
  display: flex;
  margin: 0 2px;
`;

export const VariableContainer = styled.div`
  display: flex;
  margin: 3px 0;
`;

export const InfoVariable = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: calc(10px + 0.5vw);
  margin-left: 5px;
`;

export const NameVariable = styled.div`
  font-family: ${appFontFamily.lato};
  font-size: calc(10px + 0.5vw);
  margin: 0 5px;
  font-weight: bold;
  width: 25px;
`;

export const ButtonInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const VariableExplanationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
