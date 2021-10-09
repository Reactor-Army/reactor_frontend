import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUser} from "../services/users";

export const fetchUser = createAsyncThunk("fetchUser", getUser);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.user = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
