import React, {useState, useEffect} from "react";
import {PageTitle} from "../../../common/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/usersSlice";
import {CircularProgress} from "@material-ui/core";
import {
  TableContainer,
  PageContainer,
  LoaderContainer,
} from "./UsersRouteStyles";
import {DataGrid} from "../../../components/DataGrid/DataGrid";
import {capitalize} from "../../../common/FormatUtils";

export const UsersRoute = () => {
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [headerTitles, setHeaderTitles] = useState([]);
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const userKeys = Object.keys(users[0]);
      setHeaderTitles(
        userKeys.map((headerItem) => {
          return capitalize(headerItem);
        }),
      );

      const items = users.map((user) => {
        let role = {};
        role.roleName = user.rol.nombre;
        const values = {...user, ...role};
        delete values.rol;
        return values;
      });

      setGridItems(items);
    }
  }, [users]);

  return (
    <PageContainer>
      <PageTitle title="Users" />
      <TableContainer>
        {!users || !users.length ? (
          <LoaderContainer>
            <CircularProgress />
          </LoaderContainer>
        ) : (
          <DataGrid headerItems={headerTitles} items={gridItems} />
        )}
      </TableContainer>
    </PageContainer>
  );
};
