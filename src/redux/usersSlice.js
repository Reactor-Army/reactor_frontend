import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers, getRoles} from "../services/users";

export const fetchUsers = createAsyncThunk("fetchUsers", getUsers);

export const fetchRoles = createAsyncThunk("fetchRoles", getRoles);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.loading = false;
    },
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

export default usersSlice.reducer;
