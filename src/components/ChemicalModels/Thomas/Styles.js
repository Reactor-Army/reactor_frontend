import styled from "styled-components";

export const ThomasPageLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 60px;
  margin-bottom: 15px;
  margin-top: 80px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
