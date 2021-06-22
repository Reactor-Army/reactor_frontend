import React from "react";
import {Modal as MuiModal} from "@material-ui/core";
import {ModalContent} from "./ModalStyles";

export const Modal = ({open, onClose, children}) => {
  return (
    <>
      {open ? (
        <MuiModal open={open} onClose={onClose}>
          <ModalContent>{children}</ModalContent>
        </MuiModal>
      ) : null}
    </>
  );
};
