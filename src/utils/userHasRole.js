export const userHasRole = (userData, role) => {
  return (
    userData &&
    userData.rol &&
    userData.rol.nombre &&
    userData.rol.nombre === role
  );
};
