import {createSlice} from "@reduxjs/toolkit";

const initialState = {open: false, message: null};

const snackbarSlice = createSlice({
  name: "crudSnackbar",
  initialState,
  reducers: {
    display(state, action) {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const {display, close} = snackbarSlice.actions;
export default snackbarSlice.reducer;
