export const userHasRole = (userData, role) => {
  return userData && userData.rol && userData.rol.nombre === role;
};
