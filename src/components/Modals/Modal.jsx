import React from "react";
import {Modal as MuiModal} from "@material-ui/core";
import {ModalContent, CloseButtonRow, CloseButton} from "./ModalStyles";
import closeButton from "../../resources/images/close_button.png";

export const Modal = ({open, onClose, children}) => {
  return (
    <>
      {open ? (
        <MuiModal open={open} onClose={onClose}>
          <ModalContent>
            <CloseButtonRow>
              <CloseButton
                src={closeButton}
                alt="Close Button"
                onClick={onClose}
              />
            </CloseButtonRow>
            {children}
          </ModalContent>
        </MuiModal>
      ) : null}
    </>
  );
};
