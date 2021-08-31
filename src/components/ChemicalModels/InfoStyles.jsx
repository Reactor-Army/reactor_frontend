import styled from "styled-components/macro";
import {appFontFamily} from "../../common/styles";

export const Info = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  max-width: 2000px;
`;

export const InfoTitle = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Ecuation = styled.img`
  margin: 0 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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

export const SupUnit = styled.sup``;

export const InfoVariable = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin-left: 5px;
`;

export const NameVariable = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 14px;
  margin: 0 5px;
  font-weight: bold;
  width: 20px;
`;

export const SubName = styled.sub``;

export const ButtonInfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
