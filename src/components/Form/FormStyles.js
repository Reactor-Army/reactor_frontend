import styled from "styled-components/macro";

export const FormLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 60px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
