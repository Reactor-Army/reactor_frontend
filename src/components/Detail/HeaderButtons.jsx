import {EditButton} from "../List/common/EditButton";
import {DeleteButton} from "../List/common/DeleteButton";
import React from "react";
import {useSelector} from "react-redux";
import {settings} from "../../config/settings";

export const HeaderButtons = ({editUrl, onDeleteClick}) => {
  const role = useSelector((state) => state.auth.userData.rol.nombre);
  if (role !== settings.ROLE_ADMIN) {
    return null;
  }

  return (
    <>
      <EditButton url={editUrl} />
      <DeleteButton onClick={onDeleteClick} />
    </>
  );
};
