import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/usersSlice";
import {CircularProgress} from "@material-ui/core";
import {
  TableContainer,
  PageContainer,
  LoaderContainer,
  ActionsContainer,
} from "./UsersRouteStyles";
import {DataGrid} from "../../../components/DataGrid/DataGrid";
import {formatDate} from "../../../common/FormatUtils";
import {ListHeader} from "../../../components/List/common/ListHeader";
import {EditButton} from "../../../components/List/common/EditButton";
import {DeleteButton} from "../../../components/List/common/DeleteButton";
import {URLS} from "../../urls";
import {userEditUrlFor} from "../../urls";
import {errorCodes} from "../../../utils/errorStatusCodes";
import {Redirect} from "react-router";
import {DeleteUserModal} from "../../../components/Modals/DeleteUserModal";

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
    "Acciones",
  ];
  const [gridItems, setGridItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();

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
        values.actions = (
          <ActionsContainer>
            <EditButton url={userEditUrlFor(values.id)} />
            <DeleteButton
              onClick={() => {
                setShowDeleteModal(true);
                setDeleteId(values.id);
              }}
            />
          </ActionsContainer>
        );
        return values;
      });

      setGridItems(items);
    }
  }, [users]);

  return (
    <>
      {users && errorCodes.includes(users.status) ? (
        <Redirect to={URLS.NOT_FOUND} />
      ) : (
        <PageContainer>
          <DeleteUserModal
            userId={deleteId}
            open={showDeleteModal}
            onClose={() => {
              setShowDeleteModal(false);
            }}
            error={false}
          />
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
      )}
    </>
  );
};
