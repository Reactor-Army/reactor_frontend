import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/usersSlice";
import {CircularProgress} from "@material-ui/core";
import {
  TableContainer,
  PageContainer,
  LoaderContainer,
} from "./UsersRouteStyles";
import {DataGrid} from "../../../components/DataGrid/DataGrid";
import {formatDate} from "../../../common/FormatUtils";
import {ListHeader} from "../../../components/List/common/ListHeader";
import {URLS} from "../../urls";

export const UsersRoute = () => {
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const headerTitles = [
    "Id",
    "Email",
    "Nombre",
    "Apellido",
    "Rol",
    "Último acceso",
    "Descripción",
  ];
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const items = users.map((user) => {
        let values = {};
        values.id = user.id;
        values.email = user.email;
        values.name = user.nombre;
        values.lastName = user.apellido;
        values.role = user.rol.nombreVerbose;
        values.lastLogin = formatDate(user.ultimoLogin);
        values.description = user.descripcion;
        return values;
      });

      setGridItems(items);
    }
  }, [users]);

  return (
    <PageContainer>
      <ListHeader title="Usuarios" creationUrl={URLS.USER_CREATE} />
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
