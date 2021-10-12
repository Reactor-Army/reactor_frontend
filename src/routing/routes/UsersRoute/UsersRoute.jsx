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
  const [deleteUserData, setDeleteUserData] = useState({});

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
                setDeleteUserData({id: values.id, email: values.email});
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
      <PageContainer>
        <DeleteUserModal
          userData={deleteUserData}
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
    </>
  );
};
