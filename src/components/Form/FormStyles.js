import styled from "styled-components/macro";
import {FORM_LAYOUTS} from "./Form";

export const FormLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 60px;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SingleColumnFormLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 60px;

  margin-bottom: 40px;
`;

export const SingleRowFormLayout = styled(FormLayout)`
  grid-template-columns: repeat(${(props) => props.children.length}, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: ${({layout}) =>
    layout === FORM_LAYOUTS.SINGLE_ROW ? "flex" : "block"};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
