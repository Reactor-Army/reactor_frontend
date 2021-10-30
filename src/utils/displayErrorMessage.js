import store from "../redux/store";
import {display} from "../redux/snackbar";

export const displayErrorMessage = ({message}) => {
  store.dispatch(display({message: message, severity: "error"}));
};
