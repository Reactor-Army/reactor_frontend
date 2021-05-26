import styled from "styled-components/macro";

export const TittleContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const IdealAdsorbentListContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 415px) {
    margin-right: 8%;
  }

  @media (max-width: 359px) {
    margin-right: 2%;
  }

  @media (max-width: 320px) {
    margin-right: 0%;
  }
`;
