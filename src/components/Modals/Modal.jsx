import React from "react";
import {Modal as MuiModal} from "@material-ui/core";
import {ModalContent} from "./ModalStyles";

export const Modal = ({open, children}) => {
  return (
    <>
      {open ? (
        <MuiModal open={open}>
          <ModalContent>{children}</ModalContent>
        </MuiModal>
      ) : null}
    </>
  );
};
