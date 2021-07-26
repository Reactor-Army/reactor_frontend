import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const Title = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
`;

export const Value = styled.div`
  font-size: 14px;
  font-family: ${appFontFamily.primary};
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 14px;
  font-family: ${appFontFamily.primary};
`;

export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-left: 1px solid ${appColors.gray};
  border-right: 1px solid ${appColors.gray};
  border-bottom: 1px solid ${appColors.gray};
`;

export const RowContainer = styled.div`
  tr:first-child {
    border-radius: 5px 5px 0 0;
    border-top: 1px solid ${appColors.gray};
  }

  tr:last-child {
    border-radius: 0 0 5px 5px;
  }

  tr:nth-of-type(odd) {
    background: ${appColors.white};
  }
`;
