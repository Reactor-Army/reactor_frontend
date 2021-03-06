import styled from "styled-components/macro";
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(450px, 100%), 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  padding: 10px 15px;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
    padding: initial;
  }
`;
