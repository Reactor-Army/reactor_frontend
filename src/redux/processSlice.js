import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProcess} from "../services/processes";

export const fetchProcess = createAsyncThunk("fetchProcess", getProcess);

const processesSlice = createSlice({
  name: "process",
  initialState: {
    process: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProcess.pending]: (state) => {
      state.loading = true;
      state.process = null;
    },
    [fetchProcess.fulfilled]: (state, action) => {
      state.loading = false;
      state.process = action.payload;
    },
    [fetchProcess.rejected]: (state) => {
      state.loading = false;
      state.process = null;
    },
  },
});

export default processesSlice.reducer;
