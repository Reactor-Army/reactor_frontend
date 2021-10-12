import store from "../redux/store";
import {display} from "../redux/snackbar";

export const displaySessionExpiredMessage = () => {
  store.dispatch(
    display({
      message: "Tu sesión ha expirado, por favor iniciá sesión nuevamente.",
      severity: "warning",
    }),
  );
};
