import React from "react";
import {PageHeaderContanier} from "../../../common/styles";
import {PageTitle} from "../../../common/PageTitle";
import {getUsers} from "../../../services/auth";

export const UsersRoute = () => {
  return (
    <PageHeaderContanier>
      <PageTitle title="Users" />
      <button
        onClick={() => {
          getUsers();
        }}>
        Test
      </button>
    </PageHeaderContanier>
  );
};
