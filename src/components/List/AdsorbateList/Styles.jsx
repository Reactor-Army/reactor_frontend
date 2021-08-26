import styled from "styled-components/macro";
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 1460px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1110px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
  }
`;
