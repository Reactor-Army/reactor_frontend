import styled from "styled-components";

export const LinkContainer = styled.div`
  width: 90%;
  border-radius: 8px;
  height: 50px;
  margin: 5px auto;

  &:hover {
    background-color: #22d0f7;
  }
`;

export const LinkText = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  padding: 12px 0 0 57px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  background-color: #33c3f0;
  height: 100%;
  width: 230px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  text-align: left;
  width: 200px;
  height: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  margin: 5px 0 10px 0;
`;
