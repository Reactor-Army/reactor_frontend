import store from "../redux/store";
import {display} from "../redux/snackbar";

export const displayUpdateMessage = () => {
  store.dispatch(display({message: "Datos actualizados exitosamente."}));
};
