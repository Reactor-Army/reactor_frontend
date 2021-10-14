import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {logout} from "../../redux/auth";
import {displaySessionExpiredMessage} from "../../utils/displaySessionExpiredMessage";

export const SessionTracker = ({onSessionExpired}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((store) => store.auth);

  const parseJwt = (token) => {
    if (token) {
      return JSON.parse(window.atob(token.split(".")[1]));
    }
    return null;
  };

  useEffect(() => {
    const decodedJwt = parseJwt(token);
    // Multiplico por 1000 para hacer la conversion a milisegundos
    if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
      onSessionExpired();
      dispatch(logout());
      displaySessionExpiredMessage();
    }
  });

  return null;
};
