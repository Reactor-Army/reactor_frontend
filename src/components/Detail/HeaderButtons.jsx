import {EditButton} from "../List/common/EditButton";
import {DeleteButton} from "../List/common/DeleteButton";
import React from "react";
import {useSelector} from "react-redux";
import {settings} from "../../config/settings";
import {userHasRole} from "../../utils/userHasRole";

export const HeaderButtons = ({editUrl, onDeleteClick}) => {
  const userData = useSelector((state) => state.auth.userData);
  if (!userHasRole(userData, settings.ADMIN_ROLE)) {
    return null;
  }

  return (
    <>
      <EditButton url={editUrl} />
      <DeleteButton onClick={onDeleteClick} />
    </>
  );
};
