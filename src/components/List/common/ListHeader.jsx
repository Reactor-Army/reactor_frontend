import {PageTitle} from "../../../common/PageTitle";
import React from "react";
import {CreateButton} from "./CreateButton";
import {PageHeaderContanier} from "../../../common/styles";
import {useSelector} from "react-redux";
import {settings} from "../../../config/settings";
import {userHasRole} from "../../../utils/userHasRole";

export const ListHeader = ({title, creationUrl}) => {
  const userData = useSelector((state) => state.auth.userData);

  const showCreateButton = userHasRole(userData, settings.ADMIN_ROLE);
  return (
    <PageHeaderContanier>
      <PageTitle title={title} />
      {showCreateButton && <CreateButton url={creationUrl} />}
    </PageHeaderContanier>
  );
};
