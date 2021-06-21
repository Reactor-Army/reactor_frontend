import React from "react";
import {Modal as MuiModal} from "@material-ui/core";
import {ModalContainer} from "./ModalStyles";

export const Modal = ({open, children}) => {
  return (
    <>
      {open ? (
        <MuiModal open={open}>
          <ModalContainer>{children}</ModalContainer>
        </MuiModal>
      ) : null}
    </>
  );
};
