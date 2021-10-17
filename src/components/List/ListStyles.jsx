import styled from "styled-components/macro";
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  padding: 10px 15px;

  @media (max-width: 415px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    padding: initial;
  }
`;
