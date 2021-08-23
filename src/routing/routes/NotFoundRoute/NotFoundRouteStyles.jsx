import styled from "styled-components/macro";
import {appFontFamily, appColors} from "../../../common/styles";
import {Link} from "../../../common/styles";

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  max-width: 380px;
  max-height: 380px;
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.div`
  font-family: ${appFontFamily.card};
  font-size: 30px;
  text-align: center;
  padding: 60px 0 10px 0;
  max-width: 100%;
  font-weight: bold;
  color: ${appColors.primary};

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ErrorCodeText = styled.div`
  font-family: ${appFontFamily.primary};
  color: ${appColors.primary};
  font-size: 120px;
  text-align: center;
  max-width: 800px;
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 60px;
    margin-bottom: 10px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: ${appFontFamily.primary};
  text-align: center;

  &:hover {
    font-weight: bold;
  }
`;
