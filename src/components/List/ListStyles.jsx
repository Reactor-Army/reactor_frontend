import styled from "styled-components/macro";
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;
