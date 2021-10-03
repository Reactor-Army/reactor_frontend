import React, {useEffect} from "react";
import {PageHeaderContanier} from "../../../common/styles";
import {PageTitle} from "../../../common/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/usersSlice";
import {CircularProgress} from "@material-ui/core";

export const UsersRoute = () => {
  const {users, loading} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return (
    <PageHeaderContanier>
      <PageTitle title="Users" />
      <div>{loading && <CircularProgress />}</div>
    </PageHeaderContanier>
  );
};
