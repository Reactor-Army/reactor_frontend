import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRoles} from "../services/users";

export const fetchRoles = createAsyncThunk("fetchRoles", getRoles);

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchRoles.pending]: (state) => {
      state.loading = true;
    },
    [fetchRoles.fulfilled]: (state, action) => {
      state.loading = false;
      state.roles = action.payload;
    },
    [fetchRoles.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default rolesSlice.reducer;
