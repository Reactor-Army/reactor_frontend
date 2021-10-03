import React, {useEffect} from "react";
import {PageTitle} from "../../../common/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/usersSlice";
import {CircularProgress} from "@material-ui/core";
import {
  TableContainer,
  PageContainer,
  LoaderContainer,
} from "./UsersRouteStyles";

export const UsersRoute = () => {
  const {users, loading} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return (
    <PageContainer>
      <PageTitle title="Users" />
      <TableContainer>
        {loading && (
          <LoaderContainer>
            <CircularProgress />
          </LoaderContainer>
        )}
      </TableContainer>
    </PageContainer>
  );
};
