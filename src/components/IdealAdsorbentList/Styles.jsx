import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const IdealAdsorbentContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const MessageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordionDetailsStyles = {
  background: appColors.white,
};

export const StyledAccordionSummary = styled(AccordionSummary)`
  background: ${appColors.lightGray};
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: ${appColors.black};
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const Chip = styled.div`
  background: ${(props) =>
    props.background ? props.background : appColors.primary};
  border-radius: 20px;
  min-width: 200px;
  max-width: min(100vw, 400px);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${appFontFamily.roboto};
  color: ${(props) => (props.color ? props.color : appColors.black)};
  padding: 20px;
  font-weight: 500;
  font-size: calc(0.8rem + 1px);
  text-align: center;
`;
