import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../services/users";

export const fetchUsers = createAsyncThunk("fetchUsers", getUsers);

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
  },
});

export default usersSlice.reducer;
