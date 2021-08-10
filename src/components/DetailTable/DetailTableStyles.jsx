import styled from "styled-components/macro";
import {appColors, appFontFamily} from "../../common/styles";

export const TableWrapper = styled.table`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

export const Title = styled.div`
  font-family: ${appFontFamily.primary};
  font-size: 20px;
  margin: 0 0 10px 10px;
  font-weight: bold;
`;

export const Value = styled.td`
  font-size: 16px;
  font-family: ${appFontFamily.primary};
  white-space: pre-wrap;

  @media (max-width: 768px) {
    white-space: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 40%;
  }
`;

export const Label = styled.td`
  font-weight: bold;
  font-size: 16px;
  font-family: ${appFontFamily.primary};
`;

export const Row = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-left: 1px solid ${appColors.lightGray};
  border-right: 1px solid ${appColors.lightGray};
  border-bottom: 1px solid ${appColors.lightGray};
`;

export const RowContainer = styled.tbody`
  margin-bottom: 15px;
  tr:first-child {
    border-radius: 5px 5px 0 0;
    border-top: 1px solid ${appColors.lightGray};
  }

  tr:last-child {
    border-radius: 0 0 5px 5px;
  }

  tr:nth-of-type(odd) {
    background: ${appColors.white};
  }
`;