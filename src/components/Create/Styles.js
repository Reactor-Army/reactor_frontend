import styled from "styled-components";

export const CreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export const FormItemContainer = styled.div`
  margin: 10px;
`;
