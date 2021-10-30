import {createSlice} from "@reduxjs/toolkit";
import {buildHttpClient} from "../utils/buildHttpClient";

const initialState = {
  userData: null,
  loggedIn: false,
  token: null,
  forceLogout: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload.userData;
      localStorage.setItem("token", action.payload.token);
      buildHttpClient(action.payload.token);
    },
    logout(state) {
      state.loggedIn = false;
      state.userData = null;
    },
    setForceLogout(state) {
      state.forceLogout = true;
      state.loggedIn = false;
      state.userData = null;
    },
    resetForceLogout(state) {
      state.forceLogout = false;
    },
  },
});

export const {
  login,
  logout,
  setForceLogout,
  resetForceLogout,
} = authSlice.actions;
export default authSlice.reducer;
