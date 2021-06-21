import React from "react";
import {Modal as MuiModal} from "@material-ui/core";
import {ModalContainer} from "./ModalStyles";

export const Modal = ({open, body}) => {
  return (
    <>
      {open ? (
        <MuiModal open={open}>
          <ModalContainer>{body}</ModalContainer>
        </MuiModal>
      ) : null}
    </>
  );
};
