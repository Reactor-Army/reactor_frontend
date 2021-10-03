import {EditButton} from "../List/common/EditButton";
import {DeleteButton} from "../List/common/DeleteButton";
import React from "react";

export const HeaderButtons = ({editUrl, onDeleteClick}) => {
  return (
    <>
      <EditButton url={editUrl} />
      <DeleteButton onClick={onDeleteClick} />
    </>
  );
};
